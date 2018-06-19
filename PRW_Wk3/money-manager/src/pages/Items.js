import React, { Component } from 'react'
import List from '../components/List'
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline'
//mport EditItem from '../components/EditItem';


class Items extends Component {

    state = {
        exList: [
            {
                expense: 'Video Game',
                amount: '59.00',
            }
        ],
    }

    componentDidMount() {
        if (localStorage.getItem('exList')) {
            let exList = JSON.parse(localStorage.getItem('exList'))
            this.setState({ exList: exList })
        }
    }

    addItem = e => {
        e.preventDefault()
        let exList = this.state.exList
        if (this.state.expense == null) {
            alert('Please enter a name.')
            return false
        }
        if (this.state.amount === 0) {
            alert('Please enter a valid amount.')
            return false
        }
        if (isNaN(this.state.amount)) {
            alert('Your amount must be a number.')
            return false
        }

        this.state.exList.push({ 'expense': this.state.expense, 'amount': this.state.amount })
        this.setState({ exList: this.state.exList })
        localStorage.setItem('exList', JSON.stringify(exList))
        document.querySelector("form").reset();
    }

    removeItem(key) {
        let exList = this.state.exList
        this.state.exList.splice(key, 1)
        this.setState({ exList: this.state.exList })
        localStorage.setItem('exList', JSON.stringify(exList))
    }

    //editItem(key) {
        
    //    <EditItem key={key} id={key}/>
            
    //}

    changeItem = e => {
        e.preventDefault()
        this.setState({ expense: e.target.value })
    }

    changeAmount = e => {
        e.preventDefault()
        //Change if issue
        let amount = e.target.value
        amount = parseFloat(amount).toFixed(2)
        this.setState({ amount: amount })
    }

    render() {
        let myItems = this.state.exList.map((val, key) => {
            return <List val={val} key={key} id={key} delMe={() => this.removeItem(key)} />
        })
        return (
            <main>
                <section className="addItem">
                    <h2>
                        Add a new item
                    </h2>
                    <form>
                        <div>
                            <label>Item</label>
                            <input type="text" name="item" onChange={this.changeItem} />
                            <label>Amount</label>
                            <input type="text" name="amount" onChange={this.changeAmount} />
                            <button type="submit" className="btn"
                                onClick={this.addItem}><MdAddCircleOutline /></button>
                        </div>
                    </form>
                </section>

                <section className="addedItems">
                    <h2>
                        Items
                    </h2>
                    <div>
                        <ul className="itemContainer">{myItems}</ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default Items
import React, { Component } from 'react'
import ChecksList from '../components/ChecksList'
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline'


class Checks extends Component {

        state = {
            chList: [
                {
                    whereFrom: 'Work',
                    amount: '2159.00',
                }
            ],
        }

    componentDidMount() {
        if (localStorage.getItem('chList')) {
            let chList = JSON.parse(localStorage.getItem('chList'))
            this.setState({ chList: chList })
        }
    }

    addItem = e => {
        e.preventDefault()
        let chList = this.state.chList
        if (this.state.whereFrom == null) {
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

        this.state.chList.push({ 'whereFrom': this.state.whereFrom, 'amount': this.state.amount })
        this.setState({ chList: this.state.chList })
        localStorage.setItem('chList', JSON.stringify(chList))
        document.querySelector("form").reset();
    }

    removeItem(key) {
        let chList = this.state.chList
        this.state.chList.splice(key, 1)
        this.setState({ chList: this.state.chList })
        localStorage.setItem('chList', JSON.stringify(chList))
    }

    changeCheck = e => {
        e.preventDefault()
        this.setState({ whereFrom: e.target.value })
    }

    changeAmount = e => {
        e.preventDefault()
        //Change if issue
        let amount = e.target.value
        amount = parseFloat(amount).toFixed(2)
        this.setState({ amount: amount })
    }

    render() {
        let myChecks = this.state.chList.map((val, key) => {
            return <ChecksList val={val} key={key} id={key} delMe={() => this.removeItem(key)} />
        })
        return (
            <main>
                <section className="addItem">
                    <h2>
                        Add a new check
                    </h2>
                    <form>
                        <div>
                            <label>Check</label>
                            <input type="text" name="check" onChange={this.changeCheck} />
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
                        <ul className="itemContainer">{myChecks}</ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default Checks
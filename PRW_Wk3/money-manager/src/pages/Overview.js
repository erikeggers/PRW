import React, { Component } from 'react'
import ChecksList from '../components/ChecksList'
import List from '../components/List'


class Checks extends Component {

        state = {
            chList: [
                {
                    whereFrom: 'Work',
                    amount: '2159.00',
                }
            ],

            exList: [
                {
                    expense: 'Video Game',
                    amount: '59.00',
                }
            ],
        }


    removeItem(key) {
        let exList = this.state.exList
        this.state.exList.splice(key, 1)
        this.setState({ exList: this.state.exList })
        localStorage.setItem('exList', JSON.stringify(exList))
    }


    removeCheck(key) {
        let chList = this.state.chList
        this.state.chList.splice(key, 1)
        this.setState({ chList: this.state.chList })
        localStorage.setItem('chList', JSON.stringify(chList))
    }

    componentDidMount() {
        if (localStorage.getItem('chList')) {
            let chList = JSON.parse(localStorage.getItem('chList'))
            this.setState({ chList: chList })
        }

        if (localStorage.getItem('exList')) {
            let exList = JSON.parse(localStorage.getItem('exList'))
            this.setState({ exList: exList })
        }
    }


    render() {
        let myChecks = this.state.chList.map((val, key) => {
            return <ChecksList val={val} key={key} id={key} delMe={() => this.removeCheck(key)} />
        })

        let myItems = this.state.exList.map((val, key) => {
            return <List val={val} key={key} id={key} delMe={() => this.removeItem(key)} />
        })

        return (
            <main>
                <section className="overView">
                    <h2>
                        Overview
                    </h2>
                </section>

                <section className="addedItems">
                    <h2>
                        Checks
                    </h2>
                    <div>
                        <ul className="itemContainer">{myChecks}</ul>
                    </div>

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

export default Checks
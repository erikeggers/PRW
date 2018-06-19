import React, { Component } from 'react'
//import EditItem from '../components/EditItem'
import MdDeleteForever from 'react-icons/lib/md/delete-forever'
import MdEdit from 'react-icons/lib/md/edit'


class List extends Component {
    render() {
        return (
            <li key={this.props.id} className="list">
                <span>{ this.props.val.expense }</span>
                <span>${ this.props.val.amount }</span>
                <button onClick={this.props.editMe}><MdEdit /></button>
                <button onClick={this.props.delMe}><MdDeleteForever /></button>
            </li>
        )
    }
}
export default List
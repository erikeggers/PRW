import React, { Component } from 'react'
import MdDeleteForever from 'react-icons/lib/md/delete-forever'
import MdEdit from 'react-icons/lib/md/edit'

class ChecksList extends Component {
    
    
    render() {
        return (
            <li key={this.props.id} className="checkList">
                <span>{ this.props.val.whereFrom }</span>
                <span>${ this.props.val.amount }</span>
                <button onClick={this.props.editMe}><MdEdit /></button>
                <button onClick={this.props.delMe}><MdDeleteForever /></button>
            </li>
        )
    }
}
export default ChecksList
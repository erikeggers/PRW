import React, { Component } from 'react'
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline'


class EditItem extends Component {
    
    
    render() {
        return (
            <section className="editItem">
                <h2>
                    Edit Item
                </h2>
                <form>
                    <div>
                        <label>Item</label>
                        <input type="text" name="item" onChange={this.changeItem} />
                        <label>Amount</label>
                        <input type="text" name="amount" onChange={this.changeAmount} />
                        <button type="submit" className="btn"
                            onClick={this.editItem}><MdAddCircleOutline /></button>
                    </div>
                </form>
            </section>
        )
    }
}
export default EditItem
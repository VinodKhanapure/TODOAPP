import React, { Component } from 'react';
import Item from './Item'

class ToDo extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            items: [],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.initialState

    }

    handleChange = (e) => {

        let value = e.target.value;
        if (value) {
            this.setState({
                text: value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const value = e.target.text.value
        if (value) {
            const items = this.setState({
                items: [...this.state.items, value]
            })
        }
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <Item items={this.state.items} />
                <h3>What needs to be done?</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="text" value={this.state.text} onChange={this.handleChange} /><br /><br />
                    <button type="submit">Add# {""}  {this.state.items.length + 1}</button>
                </form>
            </div>
        )
    }

}

export default ToDo
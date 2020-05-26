import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addItem(this.state)
        this.setState({name: '', id: ''})
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value, id: evt.target.id, isDone: false})
    }

    render() {
        return(
		<form className='NewTodoForm' onSubmit={this.handleSubmit}>
            <label htmlFor="todo">New Item:</label>
            <input type='text' id={uuidv4()} name='name' value={this.state.name} 
            onChange={this.handleChange}></input>
            <button>Add Item</button>
        </form>
        )
	}
}

export default NewTodoForm;

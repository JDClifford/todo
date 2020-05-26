import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false, item: this.props.item };
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick(evt) {
		this.props.changeStatus(this.props.id);
	}

	handleDelete(evt) {
		this.props.deleteItem(this.props.id);
	}

	handleEdit(evt) {
		this.setState({ isEditing: true });
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.editItem(this.state.item, this.props.id);
		this.setState({ isEditing: false });
	}

	handleChange(evt) {
		this.setState({ item: evt.target.value });
	}

	render() {
		let output = this.state.isEditing ? (
			<div className='Todo'>
				<form className='Todo-edit-form' onSubmit={this.handleSubmit}>
					<input type='text' value={this.state.item} onChange={this.handleChange} />
					<button>Save</button>
				</form>
			</div>
		) : (
			<div className='Todo'>
				<li className='Todo-task' onClick={this.handleClick}>
					{this.props.item}
				</li>
				<div className='Todo-buttons'>
					<button onClick={this.handleDelete}>
						<i className='fas fa-trash' />
					</button>
					<button onClick={this.handleEdit}>
						<i className='fas fa-pen' />
					</button>
				</div>
			</div>
		);

		return output;
	}
}

export default Todo;

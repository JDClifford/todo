import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{ name: 'clean dishes', isDone: false, id: uuidv4() },
				{ name: 'walk dog', isDone: false, id: uuidv4() }
			]
		};
		this.createList = this.createList.bind(this);
		this.changeStatus = this.changeStatus.bind(this);
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.editItem = this.editItem.bind(this);
	}

	changeStatus(item) {
		this.setState(
			this.state.items.map((i) => {
				item === i.id ? (i.isDone = !i.isDone) : (i.isDone = i.isDone);
			})
		);
	}
	createList() {
		return this.state.items.map((i) => {
			return (
				<Todo
					item={i.name}
					changeStatus={this.changeStatus}
					key={i.id}
					id={i.id}
					isDone={i.isDone}
					deleteItem={this.deleteItem}
					editItem={this.editItem}
				/>
			);
		});
	}

	addItem(item) {
		this.setState({ items: [ ...this.state.items, item ] });
	}

	editItem(item, id) {
		const newArray = this.state.items.map((i) => {
			i.id === id ? (i.name = item) : (i = i);
		});
		this.setState({ newArray });
	}

	deleteItem(id) {
		let newArray = this.state.items.filter((i) => {
			return i.id !== id;
		});
		this.setState({ items: newArray });
	}

	render() {
		return (
			<div className='TodoList'>
				<h1>
					Todo List <span>[Achieve your goals]</span>
				</h1>
				<ul>{this.createList()}</ul>
				<NewTodoForm addItem={this.addItem} />
			</div>
		);
	}
}

export default TodoList;

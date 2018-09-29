import React, { Component } from 'react';
import './App.css';
import { List } from './List';

class App extends Component {
	constructor() {
		super();

		this.state = {
			inputText: "",
			items: [],
		};

		this._onChange = this._onChange.bind(this);
		this._onSubmit = this._onSubmit.bind(this);
	}

	_onChange(event) {
		event.preventDefault();

		this.setState({
			inputText: event.target.value
		});
	}

	_onSubmit(event) {
		event.preventDefault();

		this.setState({
			inputText: "",
			items: [...this.state.items, this.state.inputText]
		});
	}

	render() {
		const { inputText, items } = this.state;

		return (
			<div>
				<form onSubmit={this._onSubmit}>
					<input 
						type="text" 
						name="title" 
						value={inputText} 
						onChange={this._onChange}
					/>
					<button onClick={this._onSubmit}> Add </button>
				</form>
				<List listItems={items} />
			</div>
		);
	}
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

class Formtest extends React.Component{
	constructor(props){
		super(props)
		this.state = {value: 'red'}
	}

	handleSubmit = (e) => {
		console.log(this.state.value)
		e.preventDefault()
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		})
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<select value={this.state.value} onChange={this.handleChange}>
					<option value='red'>Red</option>
					<option value='blue'>Blue</option>
				</select>
				<input type='submit' value='Go Ahead' />
			</form>
		)
	}
}

ReactDOM.render(
	<Formtest />,
	document.getElementById('root')
);
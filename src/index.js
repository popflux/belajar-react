import React from 'react';
import ReactDOM from 'react-dom';

class Formtest extends React.Component{
	constructor(props){
		super(props)
		this.state = {value: false}
	}

	handleSubmit = (e) => {
		console.log(this.state.value)
		e.preventDefault()
	}

	handleChange = (e) => {
		this.setState({
			value: !this.state.value
		})
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label>Checkbox</label>
				<input type='checkbox' value={this.state.value} onChange={this.handleChange} />
				<input type='submit' value='Go Ahead' />
			</form>
		)
	}
}

ReactDOM.render(
	<Formtest />,
	document.getElementById('root')
);
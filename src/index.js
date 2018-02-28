import React from 'react'
import ReactDOM from 'react-dom'

class Calculator extends React.Component{
	constructor(props){
		super(props)
		this.state =
			{
				scale: 'c',
				temp: 0
			}
	}

	handleCelcius = (e) => {
		this.setState({
			scale: 'c',
			temp: e.target.value
		})
	}

	handleFahrenheit = (e) => {
		this.setState({scale: 'f', temp: e.target.value})
	}

	render(){
		const temp = this.state.temp
		const scale = this.state.scale
		const celcius = scale == 'f' ? (temp-32)*5/9 : temp
		const fahrenheit = scale == 'c' ? (temp*9/5)+32 : temp
		return(
			<div>
				<fieldset>
					<legend>Scale Celcius</legend>
					<input value={celcius} onChange={this.handleCelcius} />
				</fieldset>
				<fieldset>
					<legend>Scale Fahrenheit</legend>
					<input value={fahrenheit} onChange={this.handleFahrenheit} />
				</fieldset>
			</div>
		)
	}
}

ReactDOM.render(
	<Calculator />,
	document.getElementById('root')
);
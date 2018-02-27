import React from 'react'
import ReactDOM from 'react-dom'

// let name = 'Popflux'
// let obj = {
// 	fname: 'Muhammad',
// 	lname: 'Thariq'
// }
// const element = <h1>Welcome to {name}</h1>

// function cartoon(name='Nobita', show='Doraemon') {
// 	return <div className='someclass'>
// 						<h1>cartoon name is {name} and its show is {show}</h1>
// 						<h2>Hello World</h2>
// 					</div>
// }

// // cara pertama membuat component
// function Cartoon(props){
// 	return <h1>Hello, {props.name}</h1>
// }

// cara kedua membuat component
class Cartoon extends React.Component{
	render(){
		return <h1>Hello, {this.props.name} on {this.props.show}</h1>
	}
}

function Show(){
	return	<div>
						<Cartoon name='Pikachu' show='Pokemon' />
						<Cartoon name='Aladin' show='Jasmine' />
					</div>
}

ReactDOM.render (
	<Show />,
	document.getElementById('root')
);

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

setInterval(function(){
	ReactDOM.render (
		// <h1>{obj.fname} {obj.lname}</h1>,
		// cartoon('Jasmine', 'Aladin'),
		<h2>Time now: {new Date().toLocaleTimeString()}</h2>,
		document.getElementById('root')
	);
},1000);

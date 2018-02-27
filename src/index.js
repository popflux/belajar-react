import React from 'react';
import ReactDOM from 'react-dom';

function ColorList(props){
	const list = props.color
	// const clrs = list.map((value, index)=> <li key={index}>{value}</li>)
	return <ul>{
						list.map((value, index)=> <li key={index}>{value}</li>)
					}</ul>
}

const colors = ['Red', 'Blue', 'Green', 'Blue']

ReactDOM.render(
	<ColorList color={colors} />,
	document.getElementById('root')
);


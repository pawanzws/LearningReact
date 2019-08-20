import React from 'react';
// import Radium from 'radium';
import classes from './Person.css';

const person = (props) => {
	//  Use the below code with the Radium package
	// const style = {
	// 	'@media (min-width: 500px)': {
	// 		width: '450px'
	// 	}
	// }
	const rnd = Math.random();
	if (rnd > 0.7) {
		throw Error('Something went wrong!');
	}
	return (
		<div className={classes.Person}>
			<p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} defaultValue={props.name}/>
		</div>
	)
};

// export default Radium(person);
export default person;

import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
	let btnClass = '';
	if (props.showPersons) {
		btnClass = classes.Red;
	}
	const asssignedClasses = [];
	if (props.persons.length <= 2) {
		asssignedClasses.push(classes.red);
	}
	if (props.persons.length <= 1) {
		asssignedClasses.push(classes.bold);
	}

	return(
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={asssignedClasses.join(' ')}>This is really working!</p>
			<button
			 className={btnClass}
			 onClick={props.clicked}>Toggle persons
			</button>
		</div>
	);
}

export default cockpit;

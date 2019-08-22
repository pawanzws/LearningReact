import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	// Do not use this if you have no initial state defined!!
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getDerivedStateFromProps ', props, state);
	// 	return state;
	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate ');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return { message: 'Snapshot!' }
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("[Persons.js] componentDidUpdate");
		console.log(snapshot);
	}

	render() {
		console.log('[Persons.js] rendering');
		return this.props.persons.map((person, index) => {
			return <Person
				key={person.id}
				click={() => this.props.clicked(index)}
				name={person.name}
				age={person.age}
				changed={(e) => this.props.changed(e, person.id)} />
		});
	}
};

export default Persons;

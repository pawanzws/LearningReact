import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}
	// the below code will automatically call a constructor with a super(props)
	// and initialize the below state into the constructor {Modern feature of React}
  state = {
    persons : [
      { id: 'asas1', name: "Pawan", age: 22, },
      { id: 'asas2', name: "Aniket", age: 23, },
      { id: 'asas3', name: "Raam", age: 24, },
    ],
    otherState: 'Some other state',
    showPersons: false,
  }

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps ', props, state);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	// Not recommanded for use
	// componentWillMount() {
	// 	console.log('[App.js] componentWillMount');
	// }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
		console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				/>;
    }

    return(
      <div className={classes.App}>
				<Cockpit
					title={this.props.appTitle}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}
				/>
      	{persons}
     </div>
    )
  }
}

export default App;

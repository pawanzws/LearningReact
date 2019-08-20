import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component{
  state = {
    persons : [
      { id: 'asas1', name: "Pawan", age: 22, },
      { id: 'asas2', name: "Aniket", age: 23, },
      { id: 'asas3', name: "Raam", age: 24, },
    ],
    otherState: 'Some other state',
    showPersons: false,
  }

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
    let persons = null;
		let btnClass = '';

    if (this.state.showPersons) {
      persons = (
					<div>
	          {this.state.persons.map((person, index) => {
	            return <Person
								key={person.id}
	              click={() => this.deletePersonHandler(index)}
	              name={person.name}
	              age={person.age}
	              changed={(e) => this.nameChangedHandler(e, person.id)} />
	          })}
	        </div>
      );
			btnClass = classes.Red;
    }
    const asssignedClasses = [];
    if (this.state.persons.length <= 2) {
      asssignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      asssignedClasses.push(classes.bold);
    }
    return(
      <div className={classes.App}>
       <h1>Hi, i am a react app</h1>
       <p className={asssignedClasses.join(' ')}>This is really working!</p>
       <button
			 	className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle persons</button>
       {persons}
     </div>
    )
  }
}

export default App;

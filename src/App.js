import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
// import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import classes from './App.css';
import Person from './Person/Person';

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

  // switcNameHandler = (newName) => {
  //   // alert("Clicked");
  //   // DO NOT USE THIS: this.state.persons[0].name = 'Pawan Mittal';
  //   this.setState({
  //     persons : [
  //       { name: newName, age: 22, },
  //       { name: "Aniket", age: 23, },
  //       { name: "Raam", age: 25, },
  //     ],
  //     otherState: 'Some other state',
  //   });
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    // or we can use the Object.assign as
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // persons here is a pointer/refference to the original array of Persons
    // This is a bad practice of mutating the original array
    // const persons = this.state.persons;

    // Instead we can use because this creates a copy of the original array
    // const persons = this.state.persons.slice();

    // or a modern way of creating copy using spread (...) operator
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
	            return <ErrorBoundary key={person.id}>
								<Person
		              click={() => this.deletePersonHandler(index)}
		              name={person.name}
		              age={person.age}
		              changed={(e) => this.nameChangedHandler(e, person.id)} />
							</ErrorBoundary>
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
       {/* <button onClick={this.switcNameHandler.bind(this, 'Pawan Mittal!')}>Switch Name</button> */}
       <button
			 	className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle persons</button>
       {persons}
     </div>
    )
  }
}

// export default Radium(App);
export default App;

// const app = () => {
//   const [personState, setPersonState] = useState({
//     persons : [
//       { name: "Pawan", age: 22, },
//       { name: "Aniket", age: 23, },
//       { name: "Raam", age: 24, },
//     ],
//     otherState: 'Some random value',
//   });

//   const [otherState, setotherState] = useState({
//     otherState: 'Some random value',
//   });

//   console.log(personState, otherState);

//   const switcNameHandler = () => {
//     // alert("Clicked");
//     // DO NOT USE THIS: this.state.persons[0].name = 'Pawan Mittal';
//     setPersonState({
//       persons : [
//         { name: "Pawan Mittal", age: 22, },
//         { name: "Aniket", age: 23, },
//         { name: "Raam", age: 25, },
//       ],
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Hi, i am a react app</h1>
//       <p>This is really working!</p>
//       <button onClick={switcNameHandler}>Switch Name</button>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}/>
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age} />
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age}>My Hobbies: Racing, Dancing
//       </Person>
//     </div>
//   );
// }

// export default app;

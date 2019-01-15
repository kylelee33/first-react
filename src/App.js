import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
  state = {
    persons: [
      { name: "Kyle", age: 30 },
      { name: "Jason", age: 30 },
      { name: "Timi", age: 30 }
    ],
    otherState: "something"
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Jason", age: 30 },
        { name: "Timi", age: 34 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Kyle", age: 30 },
        { name: event.target.value, age: 30 },
        { name: "Timi", age: 34 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler.bind(this, "chipper")}>Switch Name</button>
        <p>This is really working!</p>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, "Roger")} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
      
    );
  }
}

export default App;

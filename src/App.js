import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name: 'Adesh Chauhan', age: 21},
      {name: 'Pavan Pratap Singh Chauhan', age: 30},
      {name: 'Mohit Chauhan', age: 22}
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 21},
        {name: 'Pavan Pratap Singh Chauhan', age: 30},
        {name: 'Mohit Chauhan', age: 22}
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 21},
        {name: 'Pavan Pratap Singh Chauhan', age: 30},
        {name: 'Mohit Chauhan', age: 22}
      ]
    })
  }

  tooglePerson = () => {
    const doesShowPerson = this.state.showPerson
    console.log("doesPerson", doesShowPerson)
    this.setState({showPerson: !doesShowPerson})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      cursor: 'pointer',
      padding: '4px',
      color: 'white',
      margin: '10px 3px 0px 0px'
    }
    console.log(this.state.showPerson)
    return (
      <div className="App">
        <button style = {style} onClick={this.tooglePerson}>Switch Name</button>
        {
          this.state.showPerson === true ?
          <div>
            <Person 
              name = {this.state.persons[0].name} 
              age = {this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Adesh')}
              changed={this.changeNameHandler}>
                Change the Name
            </Person> 
            <Person 
              name = {this.state.persons[1].name} 
              age = {this.state.persons[1].age}
            />
            <Person 
              name = {this.state.persons[2].name} 
              age = {this.state.persons[2].age}/>
          </div> : null
        }
      </div>
    )
  }

}

export default App;

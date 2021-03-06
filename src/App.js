import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {id: '1',name: 'Adesh Chauhan', age: 21},
      {id: '2',name: 'Pavan Pratap Singh Chauhan', age: 30},
      {id: '3',name: 'Mohit Chauhan', age: 22}
    ],
    showPerson: false
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    })
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons})
  }

  tooglePerson = () => {
    const doesShowPerson = this.state.showPerson
    this.setState({showPerson: !doesShowPerson})
  }

  deletePerson = (PersonIndex) => {
    const persons = [...this.state.persons]
    persons.splice(PersonIndex, 1)
    this.setState({persons})
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

    let persons = null

    if (this.state.showPerson) {
      persons = <div>
        {this.state.persons.map((person, index) => {
         return <Person
         click={() => this.deletePerson(index)}
         name={person.name} 
         age={person.age}
         key={person.id}
         changed={(event)=> this.changeNameHandler(event, person.id)}/>
        })}
    </div>
    }
    return (
      <div className="App">
        <button style = {style} onClick={this.tooglePerson}>Switch Name</button>
        {persons}
      </div>
    )
  }

}

export default App;

import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person'

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  font: inherit;
  cursor: pointer;
  padding: 4px;
  color: white;
  margin: 10px 3px 0px 0px;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};;
    color: black;
  }
`

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
        <StyledButton alt={this.state.showPerson} onClick={this.tooglePerson}>Switch Name</StyledButton>
        {persons}
      </div>
    )
  }

}

export default App;

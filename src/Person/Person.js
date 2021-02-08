import React from 'react';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`
    margin: auto;
    margin-top: 10px;
    width: 60%;
    border: 1px solid #eeeeee;
    box-shadow: 1px 2px #cccccc;
    padding: 20px;
    text-align: center;
    @media (min-width: 500px) : {
        width:  400px
    }`

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}>My name is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </StyledDiv>
    )
}

export default person
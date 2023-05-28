import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  // const [num1, setNum1] = useState(1);
  // const [num2, setNum2] = useState(2);

  const [state, setState] = useState({
    num1: 1,
    num2: 2,
    response: "",
    score: 0,
    incorrect: false
  })

  function inputKeyPress(event) {
    if(event.key === "Enter") {
      const answer = parseInt(state.response);

      if(state.num1 + state.num2 === answer) {
        // user got correct answer
        setState({
          ...state,
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          response: "",
          score: state.score + 1,
          incorrect: false
        })
      } else {
        // user got wrong answer
        setState({
          ...state,
          response: "",
          score: state.score - 1,
          incorrect: true
        })
      }
    }
  }

  function updateResponse(event) {
    setState({
      ...state,
      response: event.target.value
    })
  }

  if(state.score === 10) {
    return (
      <div id='winner'>
        You won!
      </div>
    )
  }

  return (
    <div>
      <div className={state.incorrect ? 'incorrect' : ""} id='problem'>{state.num1} + {state.num2}</div>
      <input autoFocus={true} onKeyPress={inputKeyPress} onChange={updateResponse} value={state.response}/>
      <div>Score: {state.score}</div>
    </div>
  );
}

export default App;

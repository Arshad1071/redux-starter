import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "./actions";
import "./App.css";

const App = () => {
  const counter = useSelector(state =>
    state.counterReducer
  );
  const isLoged = useSelector(state =>
    state.logedReducer
  );
  const dispatch = useDispatch();
  return (
    <div className='App'>
      Counter {counter}<br />
      <button onClick={() => { dispatch(increment()) }}>+</button>
      <button onClick={() => { dispatch(decrement()) }}>-</button>

      {isLoged ? <h3>Valuable information shouln't see {isLoged}</h3> : ""}
    </div>
  )
}

export default App;
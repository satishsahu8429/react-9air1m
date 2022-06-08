import React, {useState} from "react"
// useState => useState is a hook which is used
// to manage states of react.

import "./style.css";

export default function App() {

  let [test,setTest] = useState(0)
  // test is a state variable.
  // SetTest is a function which will be manage my values of state 
  //useState('') => default values of your state variable.

  // onclick, onchange
  function increment(){
    setTest(test+1)
  }
  function decrement(){
    setTest(test-1)
  }
  return(
    <div>
      <button onClick={increment}>+</button>
      <div>{test} This is work on onclick function/ events</div>
      <button onClick={decrement}>-</button>
    </div>
  );
 
}

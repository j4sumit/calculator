import React from "react";
import "./App.css";
import {useState,userEffect} from 'react';

function App() {

const [preState, setPreState] = useState("");
const [curState, setCurState] = useState("");
const [input, setInput] = useState("0");
const [operator, setOperator] = useState(null);
const [total, setTotal] = useState(false);

const inputNum = e => {
 
}
const operatorType= e => {

}
const equals = a =>{

}
const minusPlus = () => {

}
const persent = () => {

}
const reset=()=>{

}


  return (
    <div className="container">
  <div className="wrapper">
    <div className="screen"></div>
    <div className="btn light-gray" onClick={reset}>AC</div>
    <div className="btn light-gray" onClick={persent}>%</div>
    <div className="btn light-gray" onClick={minusPlus}>+/-</div>
    <div className="btn orange" onclick={operatorType}>/</div>
    <div className="btn" onclick={inputNum}>7</div>
    <div className="btn" onclick={inputNum}>8</div>
    <div className="btn" onclick={inputNum}>9</div>
    <div className="btn orange" onclick={operatorType}>x</div>
    <div className="btn " onclick={inputNum}>4</div>
    <div className="btn " onclick={inputNum}>5</div>
    <div className="btn " onclick={inputNum}>6</div>
    <div className="btn orange" onclick={operatorType}>+</div>
    <div className="btn " onclick={inputNum}>1</div>
    <div className="btn " onclick={inputNum}>2</div>
    <div className="btn " onclick={inputNum}>3</div>
    <div className="btn orange" onclick={operatorType}>-</div>
    <div className="btn zero" onclick={inputNum}>0</div>
    <div className="btn " onclick={inputNum}>.</div>
    <div className="btn " onclick={equals}>=</div>
    </div> 
    </div>
  );
}

export default App;

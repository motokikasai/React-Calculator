import React, { useState, useEffect, useRef } from 'react';
import Display from './Display';
import Operator from './Operator';

const Calc = () => {
  // let result = [];
  // const inputElem = useRef();

  const [input, setInput] = useState('');
  const [mathOp, setMathOp] = useState('');

  // useEffect(() => {
  //   // result.push(input);
  //   //   return () => {
  //   //       cleanup
  //   //   }

  //   inputElem.current.focus();
  // }, [input]);
  //   //   if (mathOp) {
  //   //     result.push(input);
  //   //   }

  const refInputFocus = () => {};

  const numInput = num => {
    setInput(input + num);
  };

  const mathOperator = op => {
    console.log(op);
    setMathOp(op);
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className='container'>
      <Display input={input} />
      <Operator numInput={numInput} clear={clearInput} math={mathOperator} />
    </div>
  );
};

export default Calc;

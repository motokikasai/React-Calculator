import React, { useState } from 'react';
import Display from './Display';
import Operator from './Operator';

const Calc = () => {
  const [input, setInput] = useState('');
  const [mathOp, setMathOp] = useState('');

  const numInput = num => {
    setInput(input + num);
  };

  const mathOperator = op => {
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

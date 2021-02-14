import React, { useState, useEffect, useRef } from 'react';
import Display from './Display';
import Operator from './Operator';

const Calc = () => {
  // const inputElem = useRef();

  const [input, setInput] = useState('');
  const [mathOp, setMathOp] = useState('');

  const numInput = num => {
    if (['+', '-', '*', '/'].includes(input) && num !== '0') {
      setInput(num);
    } else if (['+', '-', '*', '/'].includes(input) && num === '0') {
      return;
    } else if (!input && num === '0') {
      return;
    } else {
      setInput(input + num);
    }
  };

  const mathOperator = op => {
    setMathOp(op);
    !input ? setInput('') : setInput(op);
  };

  const totalValue = () => {
    console.log(
      '%c Total value here!',
      'color: orangered; font-size: 1.2rem; text-transform: capitalize;'
    );

    setInput('');
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className='container'>
      <Display input={input} mathOp={mathOp} />
      <Operator
        numInput={numInput}
        clear={clearInput}
        math={mathOperator}
        total={totalValue}
      />
    </div>
  );
};

export default Calc;

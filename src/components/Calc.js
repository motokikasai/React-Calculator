import React, { useState, useEffect, useRef } from 'react';
import Display from './Display';
import Operator from './Operator';
import UsePrevious from '../customHooks/usePrevious';

const Calc = () => {
  // const inputElem = useRef();

  const [input, setInput] = useState('');
  const [mathOp, setMathOp] = useState('');

  const numInput = num => {
    if (['+', '-', '*', '/'].includes(input)) {
      setInput(num);
    } else if (input[0] === '0' && num === '0') {
      return;
    } else if (input[0] === '0' && num !== '0') {
      setInput(num);
    } else {
      setInput(input + num);
    }
  };

  console.log('Preivous value is: ', UsePrevious(input));

  const mathOperator = op => {
    setMathOp(op);
    !input ? setInput('') : setInput(op);

    let prev = parseFloat(input);
    // console.log(UsePrevious(input));
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

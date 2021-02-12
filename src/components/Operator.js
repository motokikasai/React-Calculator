import React from 'react';

const Operator = ({ numInput, clear, math }) => {
  const btnHandler = e => {
    numInput(e.target.textContent);
  };

  const mathOp = e => {
    math(e.target.textContent);
  };

  const clearHandler = () => {
    clear();
  };

  return (
    <div className='op-wrapper'>
      <div className='num-pad'>
        <button className='btn' onClick={btnHandler}>
          7
        </button>
        <button className='btn' onClick={btnHandler}>
          8
        </button>
        <button className='btn' onClick={btnHandler}>
          9
        </button>
        <button className='btn' onClick={btnHandler}>
          4
        </button>
        <button className='btn' onClick={btnHandler}>
          5
        </button>
        <button className='btn' onClick={btnHandler}>
          6
        </button>
        <button className='btn' onClick={btnHandler}>
          1
        </button>
        <button className='btn' onClick={btnHandler}>
          2
        </button>
        <button className='btn' onClick={btnHandler}>
          3
        </button>
        <button className='btn zero' onClick={btnHandler}>
          0
        </button>
        <button className='btn clear' onClick={clearHandler}>
          clear
        </button>
      </div>
      <div className='operator'>
        <button className='btn btn-operator' onClick={mathOp}>
          +
        </button>
        <button className='btn btn-operator' onClick={mathOp}>
          -
        </button>
        <button className='btn btn-operator' onClick={mathOp}>
          *
        </button>
        <button className='btn btn-operator' onClick={mathOp}>
          /
        </button>
        <button className='btn btn-operator' onClick={mathOp}>
          =
        </button>
      </div>
    </div>
  );
};

export default Operator;

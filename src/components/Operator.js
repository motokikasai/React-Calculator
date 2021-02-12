import React from 'react';

const Operator = ({ numInput, clear }) => {
  const btnHandler = e => {
    console.log(e.target.textContent);
    numInput(e.target.textContent);
  };

  const mathOp = sign => {};

  const clearHandler = () => {
    clear();
  };

  return (
    <div className='op-wrapper'>
      <div className='num-pad'>
        <button className='btn' onClick={btnHandler}>
          9
        </button>
        <button className='btn' onClick={btnHandler}>
          8
        </button>
        <button className='btn' onClick={btnHandler}>
          7
        </button>
        <button className='btn' onClick={btnHandler}>
          6
        </button>
        <button className='btn' onClick={btnHandler}>
          5
        </button>
        <button className='btn' onClick={btnHandler}>
          4
        </button>
        <button className='btn' onClick={btnHandler}>
          3
        </button>
        <button className='btn' onClick={btnHandler}>
          2
        </button>
        <button className='btn' onClick={btnHandler}>
          1
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

      <div className='btn' onClick={clearHandler}>
        Clear
      </div>
    </div>
  );
};

export default Operator;

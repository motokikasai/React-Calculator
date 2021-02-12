import React from 'react';
import Display from './Display';
import Operator from './Operator';

const Calc = () => {
  return (
    <div className='container'>
      <Display />
      <Operator />
    </div>
  );
};

export default Calc;

import React, { useState } from 'react';

const Display = ({ input }) => {
  //   const [directInput, setDirectInput] = useState('');
  console.log(typeof input);
  const handleChange = e => {
    console.log('changed...');

    // setDirectInput(input + e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={handleChange}
        className='input'
        placeholder='0'
      />
    </div>
  );
};

export default Display;

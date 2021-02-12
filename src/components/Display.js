import React, { useState } from 'react';

const Display = () => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    console.log('changed...');

    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={handleChange}
        className='input'
      />
    </div>
  );
};

export default Display;

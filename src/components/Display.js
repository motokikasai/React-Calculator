import React, { useState, useEffect, useRef } from 'react';

const Display = ({ input, mathOp }) => {
  const [inputValue, setInputValue] = useState('');
  const inputElem = useRef(null);

  useEffect(() => {
    // console.log(inputElem.current);

    inputElem.current.scrollLeft = inputElem.current.scrollWidth;
    inputElem.current.setSelectionRange(
      inputElem.current.value.length,
      inputElem.current.value.length
    );

    setInputValue(input);
  }, [input]);

  useEffect(() => {
    setInputValue('');
  }, [mathOp]);

  // console.log(typeof btnInput);

  const handleChange = e => {
    console.log('changed...');

    // setDirectInput(input + e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        ref={inputElem}
        value={input}
        onChange={handleChange}
        className='input'
        placeholder='0'
      />
    </div>
  );
};

export default Display;

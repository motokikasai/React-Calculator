import React, { useState, useEffect, useRef } from 'react';

const Display = ({ input, mathOp }) => {
  // const [btnInput, setBtnInput] = useState(input);

  const [inputValue, setInputValue] = useState('');
  // setInputValue(input);
  const inputElem = useRef(null);
  // const cursorPosition = 0;

  useEffect(() => {
    console.log(inputElem.current);

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

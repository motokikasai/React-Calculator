import React, { useState, useEffect, useRef } from 'react';

const Display = ({ input }) => {
  // const [btnInput, setBtnInput] = useState(input);

  const inputElement = useRef(null);
  // const cursorPosition = 0;

  useEffect(() => {
    console.log(inputElement.current);
    // inputElement.current.focus();
    // if (!inputElement.current.value) {
    inputElement.current.scrollLeft = inputElement.current.scrollWidth;
    inputElement.current.setSelectionRange(
      inputElement.current.value.length,
      inputElement.current.value.length
    );
    // }

    // return () => {
    //   cleanup;
    // };
  }, [input]);

  // console.log(typeof btnInput);

  const handleChange = e => {
    console.log('changed...');

    // setDirectInput(input + e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        ref={inputElement}
        value={input}
        onChange={handleChange}
        className='input'
        placeholder='0'
        // onFocus='this.value = this.value'
      />
    </div>
  );
};

export default Display;

// import React, { useEffect, useRef } from 'react';

// const UsePrevious = value => {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// };

// export default UsePrevious;
import { useEffect, useRef } from 'react';

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;

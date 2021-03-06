import React from 'react';

const Button = ({ type='button', children }) =>
  <button
    type={type}
  >
    {children}
  </button>

export default Button;

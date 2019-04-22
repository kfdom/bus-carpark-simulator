import React from 'react';

const Button = ({ onClick, children, refEle, className, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} ref={refEle} className={className}>
      {children}
    </button>
  );
};

export default Button;

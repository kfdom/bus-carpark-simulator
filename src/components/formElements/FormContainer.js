import React from 'react';

export default ({ onSubmit, onKeyPress, children }) => (
  <form className="container" onSubmit={onSubmit} onKeyPress={onKeyPress}>
    <div>{children}</div>
  </form>
);

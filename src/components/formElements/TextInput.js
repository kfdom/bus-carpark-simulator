import React from 'react';

const TextInput = ({ refEle, error, placeholder, onChange, onKeyPress, value = '' }) => {
  return (
    <div>
      <input
        className="form-control"
        type="text"
        ref={refEle}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default TextInput;

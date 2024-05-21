import React from "react";
import styled from "styled-components";

const StInput = styled.input`
  width: 180px;
  height: 25px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-indent: 5px;
  outline: none;
  margin-right: 10px;
  margin-top: 5px;
`;

const Input = ({ input, id, placeholder, onChange, value }) => {
  return (
    <div>
      <label htmlFor={id}>{input}</label>
      <StInput
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

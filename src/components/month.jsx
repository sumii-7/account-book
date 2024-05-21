import React from "react";
import styled from "styled-components";

const MonthButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: #eee;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Month = ({ month }) => {
  return <MonthButton>{month}</MonthButton>;
};

export default Month;

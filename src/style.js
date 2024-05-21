import styled from "styled-components";

export const StWrap = styled.div`
  width: 950px;
  height: 1300px;
  background-color: #ffe176;
  border-radius: 25px;
  margin: 30px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 30px;
`;

export const Whiteform = styled.form`
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  padding: 30px 20px;
  display: flex;
`;

export const WhiteMonth = styled.section`
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  padding: 30px 20px;
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
`;

export const SaveButton = styled.button`
  width: 70px;
  background-color: #61a740;
  color: white;
  font-size: 17px;
  letter-spacing: 1px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

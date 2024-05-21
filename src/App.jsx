import Input from "./components/Input";
import Month from "./components/Month";
import { SaveButton, StWrap, WhiteMonth, Whiteform } from "./style";

function App() {
  const year = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <StWrap>
        <Whiteform>
          <Input input="날짜" id="title" placeholder="YYYY - MM - DD" />
          <Input input="항목" id="category" placeholder="지출 항목" />
          <Input input="금액" id="amount" placeholder="지출 금액" />
          <Input input="내용" id="data" placeholder="지출 내용" />
          <SaveButton type="submit">저장</SaveButton>
        </Whiteform>

        <WhiteMonth>
          {year.map((m, index) => (
            <Month key={index} month={`${m}월`} />
          ))}
        </WhiteMonth>
      </StWrap>
    </>
  );
}

export default App;

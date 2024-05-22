import { useEffect, useState } from "react";
import Input from "./components/Input";
import Month from "./components/Month";
import { v4 as uuidv4 } from "uuid";
import {
  SaveButton,
  StWrap,
  Section,
  Whiteform,
  ListSection,
  Stul,
  Stli,
  FirstP,
  SecondP,
  ListP,
} from "./style";

function App() {
  // const year = new Array(12).fill(null);
  const year = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [changemonth, setChangemonth] = useState(1);

  const selectedmonth = (id) => {
    setChangemonth(id);
  };

  useEffect(() => {
    console.log(changemonth);
  }, [changemonth]);

  const [accountlist, setAccountlist] = useState([
    {
      id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
      date: "2024-01-05",
      item: "식비",
      amount: 100000,
      description: "세광양대창",
    },
    {
      id: "25600f72-53b4-4187-a9c2-47358580e2f8",
      date: "2024-01-10",
      item: "도서",
      amount: 40500,
      description: "모던 자바스크립트",
    },
    {
      id: "24310f72-56b4-41a7-a9c2-458580ef1f8",
      date: "2024-02-02",
      item: "식비",
      amount: 50000,
      description: "회식",
    },
    {
      id: "25600f72-99b4-41z7-e4h6-47312365e2f8",
      date: "2024-02-02",
      item: "간식",
      amount: 500,
      description: "아이스크림",
    },
    {
      id: "25143e72-16e2-22a7-a9c2-47358580e2f8",
      date: "2024-02-02",
      item: "여행",
      amount: 1055000,
      description: "일본여행",
    },
    {
      id: "25600f72-97p2-14a7-a9c2-47363950e2t8",
      date: "2024-02-02",
      item: "미용",
      amount: 155000,
      description: "미용실",
    },
    {
      id: "24312f70-97q2-14a7-a9c2-47132950e2t8",
      date: "2024-02-02",
      item: "도서",
      amount: 75000,
      description:
        "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
    },
  ]);

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const addList = (e) => {
    e.preventDefault();
    const newList = {
      id: uuidv4(),
      date: date,
      item: item,
      amount: amount,
      description: description,
    };

    setAccountlist([...accountlist, newList]);
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
    <>
      <StWrap>
        <Whiteform onSubmit={addList}>
          <Input
            input="날짜"
            id="title"
            placeholder="YYYY - MM - DD"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <Input
            input="항목"
            id="category"
            placeholder="지출 항목"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <Input
            input="금액"
            id="amount"
            placeholder="지출 금액"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <Input
            input="내용"
            id="data"
            placeholder="지출 내용"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <SaveButton type="submit">저장</SaveButton>
        </Whiteform>

        <Section>
          {year.map((m, index) => {
            return (
              <Month
                key={index}
                month={`${index + 1}월`}
                changemonth={changemonth}
                onClick={() => selectedmonth(index + 1)}
              />
            );
          })}
        </Section>

        <ListSection>
          <List list={accountlist} />
        </ListSection>
      </StWrap>
    </>
  );
}

export default App;

const List = ({ list, changemonth, month }) => {
  return (
    <Stul>
      {list
        // .filter((item) => {
        //   // 1. item.date 몇월인지 찾기(split)
        //   // 2. changemonth 1번에서 찾은 값 자릿수 맞추기
        //   // 3. 두개가 같은지 비교하기
        //   item.split("-", 2) === item.date.padstart(2, "0");
        // })
        .map((item) => (
          <Stli key={item.id}>
            <FirstP>{item.date}</FirstP>
            <SecondP>
              {item.item} - {item.description}
            </SecondP>
            <ListP>{item.amount} 원</ListP>
          </Stli>
        ))}
    </Stul>
  );
};

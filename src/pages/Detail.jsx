import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DetailSection, DetailWrap, Detaildiv, Detailinput } from "../style";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const loacation = useLocation();

  //   console.log(loacation.state);

  useEffect(() => {
    const selectId = loacation.state.accountlist.filter((i) => i.id === id);
    setData(selectId[0]);
  }, []);

  const [data, setData] = useState({});
  const ChangeInput = () => {
    const [inputs, setInput] = useState({
      date: "",
      item: "",
      amount: "",
      description: "",
    });

    const { date, item, amount, description } = inputs;

    const onChange = (e) => {
      const { value, name } = e.target;
      setInput({
        ...inputs,
        [name]: value,
      });
    };
  };

  return (
    <DetailWrap>
      <DetailSection>
        <Detaildiv>
          <label for="date">날짜</label>
          <Detailinput type="text" id="date" value={data.item} />
        </Detaildiv>
        <Detaildiv>
          <label for="item">항목</label>
          <Detailinput type="text" id="item" value={data.item} />
        </Detaildiv>
        <Detaildiv>
          <label for="amount">금액</label>
          <Detailinput type="text" id="amount" value={data.amount} />
        </Detaildiv>
        <Detaildiv>
          <label for="description">내용</label>
          <Detailinput type="text" id="description" value={data.description} />
        </Detaildiv>

        <button>수정하기</button>
        <button>삭제하기</button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Home으로 이동
        </button>
      </DetailSection>
    </DetailWrap>
  );
};

export default Detail;

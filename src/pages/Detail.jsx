import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailSection, DetailWrap, Detaildiv, Detailinput } from "../style";

const Detail = ({ accountlist, setAccountlist }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const inputRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  function changeBtn() {
    const newaccountlist = accountlist.map((i) => {
      if (i.id === id) {
        i.date = inputRef.current.value;
        i.item = itemRef.current.value;
        i.amoun = amountRef.current.value;
        i.description = descriptionRef.current.value;
      }
      return i;
    });
    // console.log(newaccountlist);
    setAccountlist(newaccountlist);
    // navigate(-1);
    // inputRef.current.value;
  }

  function deleteBtn() {
    const deleteaccountlist = accountlist.filter((i) => i.id !== id);
    alert("정말로 삭제하겠습니까?");
    setAccountlist(deleteaccountlist);
    navigate(-1);
  }

  const [data, setData] = useState({});

  useEffect(() => {
    const selectId = accountlist.filter((i) => i.id === id);
    setData(selectId[0]);
  }, [accountlist]);
  if (!data) return null;

  return (
    <DetailWrap>
      <DetailSection>
        <Detaildiv>
          <label for="date">날짜</label>
          <Detailinput
            type="text"
            id="date"
            defaultValue={data.date}
            ref={inputRef}
          />
        </Detaildiv>
        <Detaildiv>
          <label for="item">항목</label>
          <Detailinput
            type="text"
            id="item"
            defaultValue={data.item}
            ref={itemRef}
          />
        </Detaildiv>
        <Detaildiv>
          <label for="amount">금액</label>
          <Detailinput
            type="text"
            id="amount"
            defaultValue={data.amount}
            ref={amountRef}
          />
        </Detaildiv>
        <Detaildiv>
          <label for="description">내용</label>
          <Detailinput
            type="text"
            id="description"
            defaultValue={data.description}
            ref={descriptionRef}
          />
        </Detaildiv>

        <button onClick={changeBtn}>수정하기</button>
        <button onClick={deleteBtn}>삭제하기</button>
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

import "../../App.scss";
import styled from "styled-components";
import Bold from "../../components/Text/Bold";
import InputText from "../../components/Input/InputText";
import Button from "../../components/Button/Button";
import Title from "../../components/Text/Title";
import Wrapper from "../../components/Layout/Wrapper";
import { useNavigate } from "react-router-dom";
import Regular from "../../components/Text/Regular";
import { useEffect } from "react";

const S1Wrap = styled.div`
  width: 99vw;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrap = styled.div`
  width: 50%;
  margin-top: 1.5rem;
`;

const ButtonWrap = styled.div`
  margin-top: 1.5rem;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Section1() {
  const navigate = useNavigate();
  let UserName = "";
  let getLocalId = window.localStorage.getItem("id");
  if (getLocalId) {
    // console.log(getLocalId);
    UserName = getLocalId;
  } else if (!getLocalId) {
    UserName = "";
  }
  // console.log(UserName);
  function goMap() {
    window.localStorage.removeItem("searchValue");
    window.localStorage.removeItem("tag");
    navigate("/map");
  }
  function goWriteReview() {
    navigate("/writereview");
  }
  function doSubmit() {
    let getInput = document.getElementById("main-search-bar").value;
    window.localStorage.setItem("searchValue", getInput);
    // alert(getInput);
    navigate("/map");
  }

  let arr = new Array();
  arr = [
    "오늘은 시원한 맥주🍺를 추천드려요!",
    "오늘은 낭만 있게 와인🍷 어때요?",
    "모히또에서 몰디브 한 잔 할래요?🍸",
    "파전에 막걸리🍶 한 잔?",
    "술 맛이 어떤가요? 달다는건 오늘 하루가 인상 깊었다는 뜻입니다.🥛",
    "술 맛의 10%는 술을 빚은 사람, 나머지 90%는 마주 앉은 사람입니다.",
    "저는 술이 써서 못마셔요. 업써서😜  ",
  ];

  const randomNumber = function randomNum(length) {
    // return Math.floor(Math.random() * arr.length);
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  return (
    <Wrapper>
      <S1Wrap>
        <Title large>
          안녕하세요.{" "}
          <Bold id="user-name" large>
            {UserName}
          </Bold>
          <br></br>
          <Regular
            style={{ fontSize: "21px", fontWeight: "600" }}
            large
            id="quote"
          >
            {randomNumber(arr)}
          </Regular>
        </Title>
        <InputWrap>
          <form onSubmit={doSubmit} autoComplete="off">
            <InputText id="main-search-bar" large></InputText>
            <input type="submit" style={{ display: "none" }}></input>
          </form>
        </InputWrap>
        <ButtonWrap>
          <Button info onClick={goMap}>
            내 주변 술집 찾기
          </Button>
          <Button info onClick={goWriteReview}>
            리뷰 쓰러 가기
          </Button>
        </ButtonWrap>
      </S1Wrap>
    </Wrapper>
  );
}

export default Section1;

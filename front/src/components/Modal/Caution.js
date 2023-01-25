import React from "react";
import SampleModal from "./SampleModal";
import styled from "styled-components";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function SecondModal({ onClose }) {
  const navigate = useNavigate();

  function Upload() {
    alert("업로드 완료!");
    navigate("/map");
  }
  return (
    <SampleModal onClose={onClose}>
      <CautionModalWrap>
        <CautionText>주의해주세요!</CautionText>
        <TextWrap>
          <StlyedH4>&middot; 삭제가 불가능 합니다.</StlyedH4>
          <StyledP>
            리뷰는 최초 등록 시 삭제가 불가능 합니다.<br></br>
            신중하게 결정해주세요!
          </StyledP>
        </TextWrap>
        <TextWrap>
          <StlyedH4>&middot; 악평, 욕설은 삼가해주세요.</StlyedH4>
          <StyledP>
            의도적인 악평, 욕설은 저희의 취지(나만 알고 있던 술집 추천)과 맞지
            않아 경고 없이 삭제, 계정 제한 조치가 있을 수 있습니다.
          </StyledP>
        </TextWrap>
        <TextWrap>
          <StlyedH4>&middot; 솔직하게 남겨주세요!</StlyedH4>
          <StyledP>
            남겨주신 리뷰를 활용해 가게 홍보 및 발전에 도움이 될 수 있게
            솔직하게 남겨주시기 바랍니다.
          </StyledP>
        </TextWrap>
        <BtnWrap>
          <Button onClick={Upload} info>
            등록할래요!
          </Button>
          <Button cancel onClick={onClose}>
            취소할게요!
          </Button>
        </BtnWrap>
      </CautionModalWrap>
    </SampleModal>
  );
}
const CautionModalWrap = styled.div`
  width:100%  
  border:0;
  height: 80vh;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
`;
const CautionText = styled.h3`
  font-size: 24px;
`;
const StlyedH4 = styled.h4`
  font-size: 22px;
  text-align: left;
  margin-bottom: 1vh;
`;
const StyledP = styled.p`
  font-size: 17px;
  text-align: left;
`;
const TextWrap = styled.div``;
const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  button:last-child,
  button:first-child {
    width: 49%;
  }
`;
export default SecondModal;

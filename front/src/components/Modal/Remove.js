import React from "react";
import SampleModal from "./SampleModal";
import Button from "../Button/Button";
import styled from "styled-components";
import { BsFillExclamationCircleFill } from "react-icons/bs";

function RemoveModal({ onClose }) {
  return (
    <SampleModal onClose={onClose}>
      <RemoveModalWrap>
        <BsFillExclamationCircleFill color="#9CD5C2" size="40px" />
        <h4>정말 삭제하시겠습니까? </h4>
        <p>
          삭제를 하시면 다시 복구할 수 없습니다.<br></br>
          정말로 삭제하시겠습니까?
        </p>
        <div className="btn-wrap">
          <Button info>삭제하기</Button>
          <Button cancel onClick={onClose}>
            유지하기
          </Button>
        </div>
      </RemoveModalWrap>
    </SampleModal>
  );
}
const RemoveModalWrap = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h4 {
    font-size: 24px;
  }
  p {
    font-size: 18px;
  }
  .btn-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button:first-child,
    button:last-child {
      width: 48%;
    }
  }
`;
export default RemoveModal;

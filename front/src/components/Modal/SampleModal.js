import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useOutSideClick from "./useOutSideClick";
import ModalContainer from "./ModalContainer";

function SampleModal({ onClose, children }) {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);
  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <CloseButton onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </CloseButton>
          <Contents>{children}</Contents>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
}
const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9998;
`;

const ModalWrap = styled.div`
  width: 30vw;
  height: fit-content;
  border-radius: 1.3em;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CloseButton = styled.div`
  position: fixed;
  right: 0;
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #9cd5c2;
    font-size: 30px;
  }
`;
const Contents = styled.div`
  width: 85%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;
export default SampleModal;

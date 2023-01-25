import React, {useState} from 'react';
import styled from "styled-components";
import { HiExclamationCircle } from "react-icons/hi";
import Button from "../Button/Button";



function IsRemove({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  
  return (
      <Overlay>
        <ModalWrap>
          <Contents1>
            <HiExclamationCircle />
            <p>asdasdas</p>
              <Button className="upload" info onClick={onClickButton}>등록하기</Button>
              <Button className="upload" info onClick={handleClose}>취소하기</Button>
          </Contents1>
        </ModalWrap>
      </Overlay>
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
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const Contents1 = styled.div`
  width:100%;
`;

export default IsRemove;

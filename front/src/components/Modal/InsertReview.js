
import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


function InsertReview(){

  const navigate = useNavigate();
    const onClickButton = () => {
      navigate('/writereview');
    };
  
    return (
      <ModalWrap>
        <Button info onClick={onClickButton}>리뷰 등록하기 +</Button>
        
      </ModalWrap>
    );
  }
  
  
  
  const ModalWrap = styled.div`
    text-align: center;
    margin:0 auto;
    Button{
      width:100%;
    }
  `;

export default InsertReview;

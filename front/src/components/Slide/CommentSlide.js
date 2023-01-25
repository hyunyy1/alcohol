import React from "react";
import RemoveModal from '../../components/Modal/Remove';
import styled from "styled-components";
import Button from "../Button/Button";
import Address from "../Text/GrayText";
import Regular from "../Text/Regular";
import Title from "../Text/Title";
import { useState } from "react";

// import './S3slidecardMypage.scss';
const SlideWrap = styled.div`
width:100%;
margin:0 auto;
display:flex;
flex-direction: row;
justify-content: space-around;
.card{
  width:90%;
  height:250px;
  border:2px solid #9CD5C2;
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center;
  .title-wrap{
    width:90%;
    display:flex;
    flex-direction:row;
    .title{
      font-size:22px;
      color:#9CD5C2;
      width:80%;
      margin:0 auto;
      font-weight:600;
      text-align: left;
    }
    .emoge{
      display:inline;
      font-size:20px;
    }
  }
  .addr{
    width:80%;
    margin: 0 auto;
    text-align: left;  
    font-size:15px;
    font-weight:400;
    color:#5B5B5B;
  }
  .review{
    width:80%;
    margin: 0 auto;
    text-align: left;
    font-size:16px;
    font-weight:400;
  }
  .btn-wrap{
    width:85%;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    margin:0 auto;        
    .btn{        
      width:45%;          
      border:2px solid #9CD5C2;
      border-radius: 20px;
      background-color: #fff;
      padding:5px;
      cursor: pointer;
      font-size:15px;
      color:#9CD5C2;
      font-weight: 500;
    }
    .btn:hover{
      background-color: #9CD5C2;
      color:#fff;
    }
  }
  
}

`;

function SlideCard(props){

  const [isOpen, setIsOpen] = useState(false);
  function moveToComment(){
    alert('내가 쓴 댓글 수정하기')
  }
  function moveToRemove(){
    setIsOpen(true);
  }
  
  return(<>
    <SlideWrap>
      <div className="card">
        <div className="title-wrap">
        <Title className="title">술집 이름</Title>
        <div className="emoge">{props.emoge}</div>
        </div>
        
        <Address className="addr">서울시 강남구 어쩌구 저저구 122-122</Address>
        <Regular className="review">느낌이 오잖아 떨리고 있잖아 언제까지 눈치만 볼거니 네 맘을 말해봐 망설이지 말란 말이야 </Regular>
        <div className="btn-wrap">
          <Button className="btn" onClick={moveToComment}>수정</Button>
          <Button className="btn" onClick={moveToRemove}>삭제</Button>
        </div>
      </div>
    </SlideWrap>
    {isOpen && (<Remove
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    />)}
    </>
  );
}
export default SlideCard;

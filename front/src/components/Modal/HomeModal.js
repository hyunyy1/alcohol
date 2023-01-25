import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Title from "../Text/Title";
import Bold from "../Text/Bold";
import { IoMdClose } from "react-icons/io";
import { BsFillBookmarkFill } from "react-icons/bs";
import Regular from "../Text/Regular";
import Button from "../Button/Button";
import InputText from "../Input/InputText";
import Comment from "../Comment/Comment";
import Radio from "../Input/Radio";
import RadioGroup from "../Input/RadioGroup";
import InputFile from "../Input/InputFile";
import ButtonCart from "../Button/ButtonCart";
import useOutSideClick from "./useOutSideClick";

function Modal({ onClose, ...props }) {
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

  const good = "😀";
  function InsertComment(e) {
    e.preventDefault();
    let getInput = document.getElementById("create-comment");
    let getShowBox = document.getElementById("show-comment");
    let getRadio = document.getElementById("radio");
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    let newP2 = document.createElement("p");
    let littleDiv = document.createElement("div");
    var selected = document.querySelector('input[name="score"]:checked');

    if (document.getElementById("create-comment").value == "") {
      alert("댓글을 입력해주세요");
    } else if (!selected) {
      alert("평점을 선택하세요");
    } else if (getInput && selected) {
      newDiv.setAttribute("class", "comment-wrap");
      littleDiv.setAttribute("class", "score");
      newP.setAttribute("class", "comment");
      newP2.setAttribute("class", "userId");
      littleDiv.append(e.target.score.value);
      newP.append(getInput.value);
      newP2.append(window.localStorage.getItem("id"));
      newDiv.append(littleDiv, newP, newP2);
      getShowBox.prepend(newDiv);
    } else {
      console.log("에러에러");
    }
    // alert(`${e.target.score.value},${getInput.value}`);
  }
  let newImg = document.createElement("img");
  newImg.setAttribute("class", "img");
  function goKakaoMap() {
    alert("카카오맵으로 보기");
  }
  function InsertCart() {
    alert("찜하기");
  }
  function test() {
    //   for (let i = 0; i < props.positions.length; i++) {
    //     let getCate = props.positions[this];
    //     console.log(getCate);
    //   }
  }
  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <CloseButton onClick={handleClose}>
          <IoMdClose />
        </CloseButton>
        <Contents1>
          <div className="title-wrap">
            <Title>
              <Bold large>{props.shop_name}</Bold>
            </Title>
            <Regular></Regular>
          </div>
          <div className="img-wrap">
            {/* <div className="img-upload">
              <input id="img-upload-input" type="file"></input>
              <label for="img-upload-input">+</label>
            </div> */}
            <div className="imgs">
              <img className="img" src=""></img>
            </div>
          </div>
          <div className="contents-wrap">
            <div className="left-wrap">
              <Title>추천자의 말</Title>
              <textarea
                gray
                readOnly={true}
                className="show-review"
                value={props.review}
              ></textarea>
              <Title>직접 의견을 남겨주세요!</Title>
              <form onSubmit={InsertComment} className="upload-comment">
                <InputText
                  autoComplete="off"
                  place="직접 의견을 남겨주세요."
                  gray
                  id="create-comment"
                  className="create-comment"
                ></InputText>
                <RadioGroup className="score-wrap" name="score">
                  <Radio className="radio" name="score" value="😥">
                    😥
                  </Radio>
                  <Radio className="radio" name="score" value="😀">
                    😀
                  </Radio>
                  <Radio className="radio" name="score" value="😍">
                    😍
                  </Radio>
                  <Button info className="submit-btn">
                    등록
                  </Button>
                </RadioGroup>
              </form>
            </div>
            <div className="right-wrap">
              <Title>어떤가요?</Title>
              <div className="show-comment" id="show-comment">
                <Comment score={good}>여기 굳</Comment>
              </div>
            </div>
          </div>
          <div className="btn-wrap">
            <Button info onClick={goKakaoMap}>
              카카오 맵으로 보기
            </Button>
            <ButtonCart onClick={InsertCart}>
              <BsFillBookmarkFill color="#9CD5C2" />
            </ButtonCart>
          </div>
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
  width: 40vw;
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

const Contents1 = styled.div`
  width:90%;
  height:90vh;
  margin:0 auto;
  display:flex;
  justify-content: space-evenly;
  flex-direction:column;
  b{  
    font-size:30px;
    text-align:left;
  }
  
  .title-wrap{

    width:100%;
    h2, p{
      width:100%;
      text-align:left;
    }
  }
  .img-wrap{
    background:#F5F5F5;
    border-radius:20px;
    height:auto;
    padding:10px;
    display:flex;
    flex-direction:row;
    overflow-x:scroll;
    overflow-y:hidden;
    font-size:10px;
    // ::-webkit-scrollbar {
    //   display:none /* Chrome , Safari , Opera */
    // }
    .imgs{
      width:80%;
      height:16vh;
      display:flex;
      flex-direction:row;
      img{
        width:auto;
      height:16vh;
      margin-right:0.6vw;
      }
    }
    .img-upload{
      display:flex;
      align-items:center;
      justify-content:center;
      width:10vw;
      font-size:10px;
      height:16vh;
      margin-right:10px;
      #img-upload-input{
        display:none;
      }
      label{
        padding:5vh 3vw;
        background:#fff;
        border-radius:20px;
      }
    }
  }
  .contents-wrap{
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    .left-wrap, .right-wrap{
      width:48%;
      height:50vh;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      h2{
        font-size:20px;
      }

      .upload-comment{
        display:flex;
          flex-direction:column;
          justify-content:space-around;
        fieldset{
          margin:1vh 0;
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          label{
            background:#F2F2F2;
            border-radius:15px;
            span{
              font-size:23px;
            }
            input[type="radio"]{
              display:none;
            }
            input[type="radio"] + span{
              display:inline-block;
              text-align:center;
              padding:5px 13px;
              line-height:40px;
              height:auto;
              font-weight:500;
              cursor:pointer;
            }
            input[type="radio"]:checked + span{
              background:#9CD5C2;
              border-radius:15px;
              width:100%;
              height:100%;
            }
          }
          
        }
        .submit-btn{
          width:30%;
        }

      }
      .show-review, .create-comment{
        padding:2px;
        width:17vw;
        height:15vh;
      resize:none;
      font-size:18px;
        background:#F5F5F5;
        border-radius:1em;
        border:none;
      }      
      .show-comment{
        width:100%;
        height:45vh;
        background:#F5F5F5;
        border-radius:1em;
        overflow-y:scroll;
        .comment-wrap{
          display:flex;
          flex-direction:row;
          align-items:center;
          justify-content:left;
          margin:5px;
          padding:5px;
          border-bottom:1px solid #ccc;
          .score{
            width:10%;
            font-size:20px;
          }
          .comment{
            width:90%;
            text-align:left;
            font-size:18px;
            margin:5px;
          padding:5px;
          }
          .userId{
            color:darkgray;
            font-size:20px;
          }
        }
      }
      // .show-comment::-webkit-scrollbar {
      //   display:none /* Chrome , Safari , Opera */
      // }

  }

}
.btn-wrap{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  button:first-child{
    width:85%;
  }
  button:last-child{
    width:10%;
    padding: 5px 0 ;
    svg{
      font-size:25px;
      line-height:25px;
    }
    &:hover{
      box-shadow:0 0 4px #9CD5C2;      
    }
  }
`;

export default Modal;

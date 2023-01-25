import React, {useState} from 'react';
import styled from "styled-components";
import Title from "../../components/Text/Title";
import Bold from '../../components/Text/Bold';
import { IoMdClose } from "react-icons/io";
import { BsFillBookmarkFill } from "react-icons/bs";
import Regular from "../../components/Text/Regular";
import Button from "../../components/Button/Button";
import InputText from "../../components/Input/InputText";
import axios from 'axios';


function Modal2({ onClose, parentFunction }) {
  const handleClose = () => {
    onClose?.();
  };


  const [text, setText] = useState("")
  const [mydata, setMydata] = useState([])  // 결과값

  const onChange = (e) => {
    setText(e.target.value)
  }

  const submitHandler = async(e) => {
    e.preventDefault();
    const response = await axios.get("http://127.0.0.1:8080/list", {params:{shop_name: text}});
    console.log(response.data);
    setMydata(response.data);
  }

  const clickbtn = (place, address, phone, x, y, url) => {

    // 부모창으로 값 전달
    parentFunction(place, address, phone, x, y, url); 
    onClose?.(); 
  }


  return (
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={handleClose}>
            <IoMdClose />
          </CloseButton>
          <Contents1>
  


              <form onSubmit={submitHandler} className="get-data-wrap">
                <InputText gray type="text" onChange={onChange} value={text} autoFocus placeholder="상호명을 검색해주세요!"></InputText>
                <Button type="submit">검색</Button> 
              </form>


            <div className="set-data-wrap">     
              {mydata && mydata.map((i) => {
                return (
                  <div key = {i.id} className="data-wrap">
                    <div className='text-wrap'>
                      <Title><Bold large> {i.place_name}</Bold></Title>
                      <Regular>{i.address_name}</Regular>
                    </div>
                  <div className='addr-select-btn-wrap'>
                    <Button onClick={() => clickbtn(i.place_name, i.address_name, i.phone, i.x, i.y, i.place_url)}>선택</Button>
                  </div>
                </div>
                )
                })}
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
  // ::-webkit-scrollbar {
  //   color: black;
  // }
  overflow: scroll;
`;
const CloseButton = styled.div`
position:fixed;
right:0;
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #9CD5C2;
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
  
  .get-data-wrap{
    margin-top:40vh;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;

    height:10vh;
    input{
      width:77%;
    }
    button{
      margin:0;
      width:16%;
    }
  }
  .set-data-wrap{
    
    width:100%;
    // margin-top:60vh;
    height:auto;
    .data-wrap{
      width:100%;
      height:10vh;
      display:flex;
      flex-direction:row;
      justify-content: space-evenly;
      align-items:center;
      border:2px solid #9CD5C2;
      border-radius:20px;
      margin-bottom:20px;
      .text-wrap{
        width:70%;

        h2{
          width:90%;
        }
        p{
          width:90%;
          font-weight:400;
        }
        b{
          font-size:22px;
        }
      }
      .addr-select-btn-wrap{

        width:20%;
        align-items:center;
        button{
          float:left;
          width:100%;
          margin:0;
        }
      }
    }
  }
  
`;

export default Modal2;

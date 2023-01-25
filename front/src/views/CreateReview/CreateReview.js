import Header from "../Main/Header";
import styled from "styled-components";
import Title from "../../components/Text/Title";
import InputText from "../../components/Input/InputText";
import Tag from "../../components/Tag/Tag";
import Tags from "../../components/Tag/Tags";
import InputFile from "../../components/Input/InputFile";
import TextArea from "../../components/Input/TextArea";
import Button from "../../components/Button/Button";
import Modal2 from "./Modal2";
import { useState } from "react";
import axios from 'axios';
import $ from 'jquery';
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const ReviewWrap = styled.div`
  padding-top:3vh;
  width:55%;
  height:auto;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding-bottom:10vh;
  p, h2{
    text-align:left;
    width:10%;
    font-size:18px;
  }
  .outline{
    border:none;
    height:2px;
    background:#191919;
  }
  .gray{
    border:none;;
    height:1px;
    background:#F1F1F1;
  }
  .title-wrap{
    h2{
      width:20%;
      margin-bottom:1vh 0;
      font-size:25px;
    }
  }
  .bar-addr-wrap, .tag-wrap, .img-wrap, .review-wrap{
    width:100%;
    height:auto;
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:3.5vh 0;
  }
  .bar-addr-wrap{
    justify-content:space-between;
    h2{
      width:24%;
    }
    .bar-name, .bar-addr{
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      width:49%;
    }
    .bar-addr{
      h2{
        text-align:center;
      }
    }
  }
  .tag-wrap{
    h2{
      width:10%;
    }
  }
  .img-wrap{
    height:25vh;
    h2{
      width:10%;
    }
    .show-img-wrap{
      width:80%;
      display:flex;
      flex-direction:row;
      justify-content:left;
      overflow:scroll;
      ::-webkit-scrollbar {
        display:none;
      }
      img{
        
      }
    }
    input{
      display:none;
      font-size:20px;
      border: 1px solid black;
    }
    label{
      margin-right:20px;
      padding 50px 60px;
      border-radius:20px;
      background:#f5f5f5;
      cursor:pointer;
    }
  }
  .review-wrap{
    textarea{
      height:20vh;
    }
  }
  .btn-wrap{
    width:100%;
    margin-top:2vh;
    font-size:30px;
    Button:first-child{
      width:40%;
      margin:0 1vw;
    }
    Button:last-child{
      width:40%;
      margin:0 1vw;
    }
  }
`;
const CheckBoxWrap = styled.div`
width:90%;

display:flex;
flex-direction:row;
align-items:center;
justify-content: space-between;
height:5vh;

.checkbox-wrapper{
  width: 17%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width:0%;
    display:none;
  }
  input:checked + label {
    font-weight: 600;
    color: #9cd5c2;
    border: 1px solid #9cd5c2;
  }
  label{
    width: 100%;
    font-size: 17px;
    font-weight:400;
    background: #F1F1F1;
    // border: 1px solid #9cd5c2;
    border-radius: 1em;
    padding: 5px;
    :hover {
      border: 1px solid #9cd5c2;
      font-weight: 600;
      color: #9cd5c2;
      cursor: pointer;
    }
  }
}  
`;







function WriteReview(){
  const navigate = useNavigate();
  function CancelReview(){
    navigate('/map');
  }
  const [isOpen, setIsOpen] = useState(false);
  const [place, setPlace] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [chkArray] = useState([]);
  const [imgBase64, setImgBase64] = useState([]);


  const onClickButton = () => {
    setIsOpen(true);
  };

  const parentFunction = (place, address, phone, x, y, url) => {
    // console.log("자식에서 부모로 데이터 넘어옴", place, address)
    setPlace(place);
    setAddress(address);
    setPhone(phone);
    setX(x);
    setY(y);
    setUrl(url);
  }

  const handleChangeFile = (e) => {

    // 이미지 미리보기
    setImgBase64([]);
    for(var i = 0 ; i < e.target.files.length; i++) {
      if (e.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        
        reader.onloadend = () => {
          const base64 = reader.result;
          // console.log(base64);
          if(base64) {
            var base64Sub = base64.toString()
            setImgBase64(imgBase64 => [...imgBase64, base64Sub])
          }
        }
      }
    }
    }


  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  const getCheckboxValue = () => {
    $('input:checkbox[name=chk]:checked').each(function() {
      chkArray.push(this.value);
    })
    console.log(chkArray);
  }


  const submitHandler = async(e) => {
    // e.preventDefault();
    const formData = new FormData;

    formData.append('place_name', place);
    formData.append('place_address', address);
    formData.append('place_phone', phone);
    formData.append('place_x', x);
    formData.append('place_y', y);
    formData.append('place_url', url);
    formData.append('place_text', text);
    formData.append('chk', chkArray);

    for (var i = 0; i < e.target.img.files.length; i++) {
      formData.append('file', e.target.img.files[i])
    }

    await axios.post("http://127.0.0.1:8080/add", formData);
  }

  

  return(
    <>
      <Header></Header>
      <ReviewWrap>
        <div className="title-wrap">
          <Title large>리뷰 등록</Title>
            <hr className="outline"></hr>
        </div>
        <div className="search-btn">
          <ModalWrap>
            <Button info onClick={onClickButton}>주소 검색</Button>
            {isOpen && (<Modal2 
              parentFunction = {parentFunction}
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            />)}
          </ModalWrap>
          </div>
          <form onSubmit={submitHandler} enctype="multipart/form-data">
        <div className="bar-addr-wrap">
          <div className="bar-name">
            <Title>상호명</Title>
            <InputText gray readOnly="true" placeholder="주소를 검색해주세요." value={place}></InputText>
          </div>
          <div className="bar-addr">
            <Title>주소</Title>
            <InputText gray readOnly="true" placeholder="주소를 검색해주세요." value={address}></InputText>
            {/* 전화번호 */}
            <InputText hidden readOnly="true" value={phone}></InputText>  
            {/* 위도 */}
            <InputText hidden readOnly="true" value={x}></InputText>  
            {/* 경도 */}
            <InputText hidden readOnly="true" value={y}></InputText>
            {/* 지도 url */}
            <InputText hidden readOnly="true" value={url}></InputText>
          </div>

          {/* <div className="search-btn">
          <ModalWrap>
            <Button info onClick={onClickButton}>검색</Button>
            {isOpen && (<Modal2 
              parentFunction = {parentFunction}
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            />)}
          </ModalWrap>
          </div> */}
        </div>
        <hr className="gray"></hr>
        <div className="tag-wrap">
          <Title>태그</Title>
          <CheckBoxWrap>
                <div className="checkbox-wrapper">
                  <input type='checkbox' name='chk' id="와인" value="와인"></input>
                  <label for="와인">와인</label>
                </div>
                <div className="checkbox-wrapper">
                  <input type='checkbox' name='chk' id="소주" value="소주"></input>
                  <label for="소주">소주</label>
                </div>
                <div className="checkbox-wrapper">
                  <input type='checkbox' name='chk' id="맥주" value="맥주"></input>
                  <label for="맥주">맥주</label>
                </div>
                <div className="checkbox-wrapper">
                  <input type='checkbox' name='chk' id="칵테일" value="칵테일"></input>
                  <label for="칵테일">칵테일</label>
                </div>
                <div className="checkbox-wrapper">
                  <input type='checkbox' name='chk' id="막걸리" value="막걸리"></input>
                  <label for="막걸리">막걸리</label>
                </div>
              </CheckBoxWrap>
        </div>
        <hr className="gray"></hr>
        <div className="img-wrap">
          <Title>사진</Title>
          {/* <InputFile name='img' onChange={handleChangeFile} multiple></InputFile> */}
          <input type="file" id="img" name="img" onChange={handleChangeFile} multiple/>
          <label for="img">+</label>
          <div className="show-img-wrap">
          {imgBase64.map((item) =>  {
            return( 
            <img
            // className="img"
            src={item}
            style={{width:'10vw',height:'18vh', marginRight:"10px"}}
            />
            )
            })}
          </div>
          
        </div>
        <hr className="gray"></hr>
        <div className="review-wrap">
          <Title>리뷰</Title>
          <TextArea placeholder="30자 이상 작성 해주세요!" id="text" onChange={handleChangeText} value={text}></TextArea>
        </div>
        <hr className="outline"></hr>
        <div className="btn-wrap">
          <Button type = "submit" info onClick={getCheckboxValue}>등록</Button>
          <Button onClick={CancelReview} cancel>취소</Button>
        </div>        
        </form>
      </ReviewWrap>
    </>
  );
}


const ModalWrap = styled.div`
width:80%;
height:auto;
text-align: center;
margin:0 auto;
display:flex;
flex-direction:row;

button{
  display:inline-block;
  margin-top:20px;
  width:20%;
  
}
`;

export default WriteReview;

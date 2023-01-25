// src/Login.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import InputText from '../../components/Input/InputText';
import InputPW from '../../components/Input/InputPW';
import InputEmail from '../../components/Input/InputEmail';
import InputTel from '../../components/Input/InputTel';
import { useState } from "react";
import axios from 'axios';
// import { response } from 'express';

const SingupWrap = styled.div`
  width:100vw;
  height:90vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  .input-wrap{
    width:20%;
    input{
      margin-bottom:1vh;
    }
  }
  .btn-wrap{
    width:20%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    button{
      :first-child{
        width:65%;
      }
      :last-child{
        width:32%;
      }
    }
    
  }
`;

const SignUp = () => {
  
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) =>{

    e.preventDefault();
    axios.post('http://localhost:8080/signup',{
      email : email,
      pw : pw,
      pwConfirm: pwConfirm,
      phonenumber: phonenumber,
      nickname: nickname
    })
    .then(response=>{

      if (response.data === "가입성공") {
          alert("로그인페이지로 이동");
          window.location = '/idLogin';
          console.log(response.data);
      }
      else if(response.data === "중복ID"){
        console.log(response.data);
        alert('이미 가입되어 있는 이메일입니다.');
      }
      else if(response.data === "비밀번호 다시 확인해주세요"){
          console.log(response.data);
          alert('비밀번호 다시 확인해주세요');
      }
      else if(response.data === "공백값"){
          console.log(response.data);
          alert('값을 넣지 않은 행을 확인해주세요');
      }
      else if(response.data === "이메일@포함여부"){
          console.log(response.data);
          alert('이메일에 @를 포함해 주세요');
      }
      else{
        setError('잘못된 로그인 자격증명');
      }
    })
    .catch(error =>{
      console.log(error);
      setError('회원가입을 시도하는 동안 오류가 발생했습니다.');
    })
  }

  const navigate = useNavigate();
  let goHome = () =>{
    navigate("/");
  }
  let goLogin = () =>{
    navigate("/login");
  }
  let SubmitSign = () => {
    // alert('회원가입 성공');
    // navigate("/");
  }
  return (
    <form onSubmit={handleSubmit}>
      {error && <p className='error'>{error}</p>}
      <SingupWrap>
        <Logo onClick={goHome} style={{margin:'0 0 1rem 0'}}>Logo</Logo>
        <form autocomplete="off" className='input-wrap'>
          <InputEmail autocomplete="off" placeholder="이메일" id="userEmail" sign value = {email} onChange = {e=>setEmail(e.target.value)} ></InputEmail>
          <InputText placeholder="닉네임" id="userId" sign value = {nickname} onChange = {e=>setNickname(e.target.value)} ></InputText>
          <InputPW placeholder="비밀번호" id="userPW" sign value = {pw} onChange = {e=>setPw(e.target.value)} ></InputPW>
          <InputPW placeholder="비밀번호 확인" id="userPWCheck" sign value={pwConfirm}  onChange = {e=>setPwConfirm(e.target.value)} ></InputPW>
          <InputTel placeholder="휴대전화" id="userPhoneNum" sign value= {phonenumber} onChange = {e=>setPhonenumber(e.target.value)} ></InputTel>
        </form>
        <div className='btn-wrap'>
          <Button info onClick={SubmitSign} type="submit">회원가입</Button>
          <Button cancel onClick={goLogin}>취소</Button>
        </div>
      </SingupWrap>
    </form>
  );
};

export default SignUp;

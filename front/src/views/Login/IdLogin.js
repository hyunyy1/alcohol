// src/Login.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import InputText from '../../components/Input/InputText';
import InputPW from '../../components/Input/InputPW';
import InputEmail from '../../components/Input/InputEmail';
import Header from '../../views/Main/Header';
// import Logout from '../../views/Main/Header';
import { useState } from "react";
import axios from 'axios';
const IdLoginWrap = styled.div`;


  width:100vw;
  height:90vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;front/src/views/Login
  .input-wrap{
    width:20%;
    input{
      margin-bottom:1vh;
    }
  }
  .id-btn-wrap{
    width:20%;}
    button{
      width:100%;}
`;

const IdLogin = () => {
  
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();

    axios.post('http://localhost:8080/login',{
      email : email,
      pw : pw
    })
    .then(response => {

      //로그인 성공할 경우 redirect
      // if (response.data.success) {
      // if (response.data) {
      //   alert("로그인 성공");
      //   console.log(response.data.split(',')[0]);   //로그인 res.send 자르기
          
      // }
      if (response.data.split(',')[0] === "로그인성공") {
        alert("로그인 성공");
        navigate('/');
        localStorage.setItem('id',response.data.split(',')[1]);

      }
      else if(response.data === "아이디틀림"){
        alert("아이디를 다시 확인하세요");
      }
      else if(response.data === "버번틀림"){
        alert("비밀번호를 다시 확인하세요");
      }
      else{
        setError('잘못된 로그인 자격증명');
      }
    })
    .catch(error => {
      console.log(error);
      setError('로그인을 시도하는 동안 오류가 발생했습니다.');
    })
  }

  const navigate = useNavigate();
  let goHome = () =>{
    navigate("/");
  }
  
  let goSignup = () =>{
    navigate("/signup");
  }
  let SubmitLogin = () => {
    // alert('로그인 성공');
    // navigate("/");
  }
  return (
    <form onSubmit={handleSubmit}>
      {error && <p className='error'>{error}</p>}
      <IdLoginWrap>
        <Logo onClick={goHome} style={{margin:'0 0 1rem 0'}}>Logo</Logo>
        <form autocomplete="off" className='input-wrap'>
          <InputEmail placeholder="이메일" id="userEmail" sign value = {email} onChange = {e=>setEmail(e.target.value)}></InputEmail>
          <InputPW placeholder="비밀번호" id="userPW" value = {pw} onChange = {e=>setPw(e.target.value)}></InputPW>
        </form>
        <div className='id-btn-wrap'>
          <Button info onClick={SubmitLogin} type = "submit">로그인</Button>
        </div>
        <div className='id-btn-wrap'>
          <Button cancel onClick={goSignup}>회원가입</Button>
        </div>
      </IdLoginWrap>
    </form>
  );
};

export default IdLogin;

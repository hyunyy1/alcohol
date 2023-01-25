// src/Login.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

const LoginWrap = styled.div`
  width:100vw;
  height:90vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
`;

const Login = () => {
  let kakaoLogin = () =>{
    alert('아직 준비중이에요!');
  }
  const navigate = useNavigate();
  let idLogin = () =>{
    navigate("/idlogin");
  }

  let goHome = () =>{
    navigate("/");
  }
  return (
      <LoginWrap>
        <Logo onClick={goHome} style={{margin:'0 0 1rem 0'}}>Logo</Logo>
        <Button kakao onClick={kakaoLogin} style={{width:'20vw',margin:'1rem 0 0.5rem 0'}}>카카오로 시작하기</Button>
        <Button idlogin onClick={idLogin} style={{width:'20vw',margin:'0 0 1rem 0'}}>아이디로 시작하기</Button>
        <Button info onClick={goHome} style={{width:'20vw',margin:'1rem 0'}}>그냥 볼래요!</Button>
      </LoginWrap>
  );
};

export default Login;

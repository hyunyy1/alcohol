import '../../App.scss';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Logo from '../../components/Logo/Logo';
import axios from 'axios';
axios.defaults.withCredentials = true;
import { useEffect } from "react";

const LogoWrap = styled.div`
  width:99vw;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top:0.3rem;
  padding:0 1.6rem;
  align-items:center;
`;
const LoginWrap = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
`;

const Login = styled.button`
  display: block;
  color:#191919;
  cursor:pointer;
  font-size:0.5rem;
  margin-left:1rem;
  border:none;
  background:none;
  :hover{
    color:#191919;
  } 
  :nth-child(1) {
    display: block;
  }
  :nth-child(2) {
    // color: blue;
    display: none;
  }
`
const Logout = styled.button`

  display:block;
  color:#191919;
  cursor:pointer;
  font-size:0.5rem;
  margin-left:1rem;
  border:none;
  background:none;
  :hover{
    color:#191919;
  } 
`
;
const Mypage = styled.button`
  display:block;
  color:#191919;
  cursor:pointer;
  font-size:0.5rem;
  margin-left:1rem;
  border:none;
  background:none;
  :hover{
    color:#191919;
  } 
`
;
function Header() {
  
  const MypageSubmit =(e) =>{
    e.preventDefault();
    axios.get('http://localhost:8080/login/sessionCheck',{
       withCredentials: true      //cors 세션 인증
    })
    .then(response =>{
      if(response.data === "세션없음") {
          console.log(response.data);
          alert("로그인해주세요");
      }
      else if(response.data === "세션있음"){
          console.log(response.data);
          alert("세션있음");
          navigate("/mypage");
          
      }

      else{
          
          alert("잘못된 세션 자격증명");
      }
    })
  }

  const LogoutSubmit =(e) =>{
    e.preventDefault();
    axios.get('http://localhost:8080/logout',{
       withCredentials: true      //cors 세션 인증
    })
    .then(response =>{
      if(response.data === "로그아웃완료") {
          console.log(response.data);
          window.localStorage.clear();
          console.log("로컬스토리지 삭제!");
          navigate('/');
          document.getElementById("logout").style.display = "none";
          alert("로그아웃완료");
          // Login.styled.button = `display: block;`;
          // useEffect(() => {
          //   // console.log("useEffect입니다~");
          //   if (window.localStorage.getItem('id','')) {
          //     //아이디가 있다면
          //     document.getElementById("logout").style.display = "block";
          //     document.getElementById("login").style.display = "none";
          //   } else if (window.localStorage.Key == "") {
          //     //빈 값이 아니라면
          //     document.getElementById("login").style.color = "purple";
          //     document.getElementById("login").style.display = "none";
          //   }
          // }, []);
      }
      
      else{
          alert("잘못된 로그아웃 자격증명");
      }
    })
  }

  const navigate = useNavigate();
  let goHome = () =>{
    navigate("/");
  }
  let goLogin = () =>{
    // alert('로그인버튼')
    navigate("/login");
  }
  let goMyPage = () =>{
    // alert('로그인버튼')
    // navigate("/mypage");
  }
  return (
    
    <LogoWrap>
      <Logo onClick={goHome}>Logo</Logo>
      <LoginWrap>
          <form>
          <Login id='login' onClick={goLogin}>Login</Login>
          </form>
          <form id='logout' onSubmit={LogoutSubmit}>
          <Logout>Logout</Logout>
          </form>
          <form id='mypage' onSubmit={MypageSubmit}>
          <Mypage onClick={goMyPage} type = "submit">My Page</Mypage>
          </form>
      </LoginWrap>
    </LogoWrap>
  );
}

export default Header;

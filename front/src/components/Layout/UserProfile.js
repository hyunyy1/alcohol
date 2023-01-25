import styled from 'styled-components';
import Button from '../Button/Button';
import Regular from '../Text/Regular';
import Title from '../Text/Title';

const StyledUserProfile = styled.div`
  width:50%;
  height:auto;
  display:flex;
  flex-direction:column;
  h2,p{
    text-align:left;
  }
  input{
    display:none;
  }
  p{
    margin-bottom:1.2vh;
  }
  .btn-wrap{
    margin-top:2vh;
    display:flex;
    flex-direction:row;
    justify-content:left;
    Button{
      width:45%;
      :first-child{
        width:50%;
        margin-right:1vw;
      }
      :last-child{
        width:25%;
      }
    }
  }
`;


function UserProfile({ children,...props }) {
  let userName = "";
  let userNickName = "";
  let userEmail = "";
  let userNum = "";
  let reviseInput = document.getElementsByClassName ('reviseInput');

  function reviseProfile(){
    for(let i = 0; i< 5;i++){
      let getInput = document.querySelectorAll('input')[i];
      let getText = document.querySelectorAll('p')[i];
      let getCancelBtn = document.getElementById('cancelBtn');

      if (getText.style.display =='block'){
        getText.style.display = "none";
        getInput.style.display="block";
        getCancelBtn.style.display="block";
      }
      else{
        getText.style.display = "block";
        getInput.style.display="none";
        getCancelBtn.style.display="none";
      }
      
    }
    alert('변경 완료')
    
    // getTest.style.color = 'red';
  };
  function cancel(){
    for(let i = 0; i< 5;i++){
      let getInput = document.querySelectorAll('input')[i];
      let getText = document.querySelectorAll('p')[i];
      let getCancelBtn = document.getElementById('cancelBtn');
    getText.style.display = "block";
    getCancelBtn.style.display="none";
    getInput.style.display="none";
    }
  }
  return (
    <StyledUserProfile {...props}>
      <Title mypage>이름</Title>
      <Regular id="test" className="userName">{props.name}</Regular>
      <input type="text" className="reviseInput"></input>

      <Title mypage>닉네임</Title>
      <Regular className="userNickName">{props.nickname}</Regular>
      <input type="text"></input>

      <Title mypage>이메일</Title>
      <Regular className="userEmail">{props.email}</Regular>
      <input type="text"></input>

      <Title mypage>휴대전화</Title>
      <Regular className="userNum">{props.num}</Regular>
      <input type="text"></input>

      <div className='btn-wrap'>
        <Button info onClick={reviseProfile}>프로필 수정</Button>
        <Button cancel id="cancelBtn" style={{display:'none'}} onClick={cancel}>취소</Button>
      </div>
    </StyledUserProfile>
  );
}

export default UserProfile;

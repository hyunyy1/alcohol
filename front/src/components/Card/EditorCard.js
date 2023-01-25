import React from "react";
import styled from "styled-components";
import Title from "../Text/Title";
import GrayText from "../Text/GrayText";
import Bold from "../Text/Bold";
import Review from "../Text/Regular";

const StyledEditorCard = styled.li`
  width:100%;
  height:auto;
  background:#fff;
  border:2px solid #9CD5C2;
  color: #9CD5C2;
  border-radius:0.6rem;
  font-size:0.6rem;
  padding: 0.5em 0.5rem;

  display:flex;
  flex-direction: column;
  cursor:pointer;
  }
`;


function EditorCard({ children,...props }) {
  function EditorClick(){
    alert('에디터 추천 글 보러가기!')
  }
  return(
    <StyledEditorCard {...props} onClick={EditorClick}>{children}
      <Title><Bold style={{marginBottom:'0.5rem'}}>Editor</Bold>의 추천</Title>
      
      <GrayText style={{marginBottom:'0.5rem'}}>서울시 구로구 부일로1길 </GrayText>
      <Review style={{marginBottom:'0.5rem'}}>저기 사라진 별의 자리 아스라이 하얀 빛 한 동안은 꺼내 볼 수 있을거야. 아낌없이 반짝인 시간은 조금...</Review>
    </StyledEditorCard>
  );
}
export default EditorCard;

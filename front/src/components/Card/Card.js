import React from "react";
import styled from "styled-components";
import GrayText from "../Text/GrayText";
import Bold from "../Text/Bold";
import Button from "../Button/Button";
import Review from "../Text/Regular";

const StyledCard = styled.li`
  width:31%;
  height:29vh;
  background:#fff;
  border:2px solid #9CD5C2;
  color: #9CD5C2;
  border-radius:1.5em;
  font-size:0.6rem;
  padding: 0.7em 0.5em;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-evenly;
  text-align:left;
  float:left;
  }
`;

function Card({ children,...props }) {
  return(
    <StyledCard {...props}>{children}
    <div style={{
      display:'flex',
      flexDirection:'row',
      textAlign:"left"
    }}>
      <Bold >술집 이름</Bold>
    </div>
      <GrayText >서울시 구로구 부일로1길 </GrayText>
      <Review >저기 사라진 별의 자리 아스라이 하얀 빛 한 동안은 꺼내 볼 수 있을거야. 아낌없이 반짝인 시간은 조금...</Review>
      <Button card>보러가기</Button>
    </StyledCard>
  );
}
export default Card;

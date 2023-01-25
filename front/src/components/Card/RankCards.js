import React from "react";
import styled from "styled-components";
import RankCard from "./RankCard";

const StyledRankCards = styled.ul`
  width:60vw;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  padding:0;
  }
`;

function RankCards({ children,...props }) {
  return(
    <StyledRankCards {...props}>{children}
      <RankCard></RankCard>
      <RankCard></RankCard>
      <RankCard></RankCard>
      <RankCard></RankCard>
    </StyledRankCards>
  );
}
export default RankCards;

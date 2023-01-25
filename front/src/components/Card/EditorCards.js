import React from "react";
import styled from "styled-components";
import EditorCard from "./EditorCard";

const StyledRankCards = styled.ul`
  width:60vw;
  display:grid;
  grid-template-columns:48.5% 48.5%;
  row-gap: 1rem;
  
  justify-content: space-between;
  padding:0;
  }
`;

function RankCards({ children,...props }) {
  return(
    <StyledRankCards {...props}>{children}
      <EditorCard></EditorCard>
      <EditorCard></EditorCard>
      <EditorCard></EditorCard>
      <EditorCard></EditorCard>
    </StyledRankCards>
  );
}
export default RankCards;

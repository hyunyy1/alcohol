import React from "react";
import styled, { css } from "styled-components";
import Tag from "./Tag";

const StyledTags = styled.div`
  width:60vw;
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items:center;
  `;

function Tags({ children,...props }) {
  return(
    <div>
    <StyledTags {...props}>
      <Tag>와인🍷</Tag>  
      <Tag>맥주🍺</Tag>  
      <Tag>소주🥛</Tag>  
      <Tag>칵테일🍹</Tag>  
      <Tag>막걸리🍶</Tag>  
    </StyledTags>
  </div>
  );
}
export default Tags;

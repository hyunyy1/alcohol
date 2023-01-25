import React from "react";
import styled, { css } from "styled-components";

const StyledTag = styled.button`
  width:100%;
  background:#fff;
  border:2px solid #9CD5C2;
  color: #9CD5C2;
  border-radius:0.6rem;
  font-size:0.6rem;
  padding: 0.5em 1rem;
  margin: 0.5em;
  cursor:pointer;
  :hover{
    background:#9CD5C2;
  color:#fff;
  }
`;

function Tag({ children,...props }) {
  return(
    <StyledTag {...props}>{children}</StyledTag>
  );
}
export default Tag;

import React from "react";
import styled, { css } from "styled-components";

const StyledTagCheack = styled.input`
  
`;

function TagCheck({ children,...props }) {
  return(
    <StyledTagCheack type="checkbox" {...props}>{children}</StyledTagCheack>
  );
}
export default TagCheck;

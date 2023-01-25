import React from "react";
import styled, { css } from "styled-components";


const StyledLogo = styled.button`
  color:#9CD5C2;
  font-size:1rem;
  font-weight:500;
  cursor:pointer;
  background:none;
  border:none;
  background:#fff;
  border-radius:20rem;
  :hover{
    color:#9CD5C2;
  }
`;

function Logo({ children,...props }) {
  return <StyledLogo {...props}>{children}</StyledLogo>;
}
export default Logo;

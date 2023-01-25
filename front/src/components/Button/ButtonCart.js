import React from "react";
import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";

const StyledButton = styled.button`
  padding: 7px 15px;
  border-radius: 15px;
  font-weight:500;
  line-height: 1.5;
  width:48%;
  font-size:18px;
  background:#ffff;
  color:#fff;
  cursor:pointer;
  border: 2px solid #9CD5C2;
  :focus{
    outline:none;
  }
  
`;


function Button({ children,...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
export default Button;

import React from "react";
import styled, { css } from "styled-components";

const StyledInputPW = styled.input`
  width:100%;
  background:#fff;
  padding:5px;
  font-size:15px;
  color:#191919;
  border:none;
  border-bottom:1px solid #ccc;
  border-radius:0;
  :focus{
    outline:none;
  }
`;

function InputPW({ children,...props }) {
  return(
    <StyledInputPW readOnly={props.readOnly} type="password" placeholder={props.place} {...props}>{children}</StyledInputPW>
  );
}
export default InputPW;

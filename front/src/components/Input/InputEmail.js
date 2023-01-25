import React from "react";
import styled from "styled-components";

const StyledInputEmail = styled.input`
  width:100%;
  background:#fff;
  color:#191919;
  border:none;
  border-bottom:1px solid #ccc;
  border-radius:0;
  padding:5px;
  font-size:15px;    
    :focus{
      outline:none;
    }
`;

function InputEmail({ children,...props }) {
  return(
    <StyledInputEmail required autocomplete='off' readOnly={props.readOnly} type="email" placeholder={props.place} {...props}>{children}</StyledInputEmail>
  );
}
export default InputEmail;

import React from "react";
import styled from "styled-components";

const StyledInputTel = styled.input`
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

function InputTel({ children,...props }) {
  return(
    <StyledInputTel readOnly={props.readOnly} type="number" placeholder={props.place} {...props}>{children}</StyledInputTel>
  );
}
export default InputTel;

import React from "react";
import styled, { css } from "styled-components";

const StyledInputText = styled.input`
width:100%;
  background:#fff;
  border:2px solid #9CD5C2;
  color: #9CD5C2;
  border-radius:1.5rem;
  padding:5px;
  font-size:15px;
  :focus{
    outline:1px solid #9CD5C2;
  }
  ${(props) =>
    props.large &&
    css`
    font-size:0.8rem;
    width:100%;
    padding:0.2rem;
    border:2px solid #9CD5C2;
    border-radius:1.5rem;
  `}
  ${(props) =>
    props.gray &&
    css`
    background:#F1F1F1;
    color:#191919;
    border:2px solid #F1F1F1;
    :focus{
      outline:none;
    }
  `}

  ${(props) =>
    props.sign &&
    css`
    background:#fff;
    color:#191919;
    border:none;
    border-bottom:1px solid #ccc;
    border-radius:0;
    :focus{
      outline:none;
    }
  `}
`;

function InputText({ children,...props }) {
  return(
    <StyledInputText readOnly={props.readOnly} autocomplete={props.autocomplete} type="text" placeholder={props.place} {...props}>{children}</StyledInputText>
  );
}
export default InputText;

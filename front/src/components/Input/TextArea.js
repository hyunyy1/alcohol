import React from "react";
import styled, { css } from "styled-components";

const StyledTextArea = styled.textarea`
  width:100%;
  height:100px;
  border-radius:1.8em;
  padding:1em;
  font-size:14px;
  background:#F1F1F1;
  color:#191919;
  border:2px solid #F1F1F1;
  scroll:none;
  overflow:hidden;
  resize:none;
  text-align:left;
  :focus{
    outline:none;
  }
`;


function TextArea({ children,...props }) {
  return(
    <StyledTextArea readOnly={props.readOnly} placeholder={props.place} {...props} rows="20" colos="40" wrap="on">{children}</StyledTextArea>
  );
}
export default TextArea;

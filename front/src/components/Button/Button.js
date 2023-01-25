import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 7px 15px;
  border-radius: 15px;
  font-size: 18px;
  font-weight:500;
  line-height: 1.5;
  border: 2px solid #9CD5C2;
  color: #9CD5C2;
  background: white;
  cursor:pointer;
  :focus{
    outline:none;
  }
  :hover{
    background:#9CD5C2;
    color:#fff;
  }
  ${(props) =>
    props.large &&
    css`
    width:90%;
  `}
  ${(props) =>
    props.info &&
    css`
    width:48%;
    font-size:18px;
    background:#9CD5C2;
    color:#fff;
    cursor:pointer;
  `}
  ${(props) =>
    props.gray &&
    css`
    background:#CCCCCC;
    color:#fff;
    border:2px solid #ccc;
    :hover{
      background:#ccc;
    }
  `}
  ${(props) =>
    props.kakao &&
    css`
    background:#FFDF38;
    color:#191919;
    border:2px solid #FFDF38;
    :hover{
      background:#FFDF38;
      color:#191919;
    }
  `}
  ${(props) =>
    props.idlogin &&
    css`
    background:#D9D9D9;
    color:#191919;
    border:2px solid #D9D9D9;
    :hover{
      background:#D9D9D9;
      color:#191919;
    }
  `}
  ${(props) =>
    props.card &&
    css`
    width:40%;
    padding:5px;
    font-size:0.8em;
    border-radius:1rem;
  `}
  ${(props) =>
    props.cancel &&
    css`
    background:#D9D9D9;
    font-size:18px;
    color:#fff;
    border:2px solid #D9D9D9;
    :hover{
      background:#D9D9D9;
  `}
`;


function Button({ children,...props }) {
  return <StyledButton type={props.type} {...props}>{children}</StyledButton>;
}
export default Button;

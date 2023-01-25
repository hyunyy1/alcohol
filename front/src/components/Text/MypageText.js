import React from "react";
import styled, { css } from "styled-components";

const StyledMypageText = styled.p`
  font-size: 19px;
  font-weight:400;
  color: #191919;
  margin-bottom:0;
  ${(props) =>
    props.large &&
    css`
    font-size:1.2em;
  `}
`;

function MypageText({ children,...props }) {
  return <StyledMypageText {...props}>{children}</StyledMypageText>;
}
export default MypageText;

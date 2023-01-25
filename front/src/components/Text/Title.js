import React from "react";
import styled, { css } from "styled-components";

const StyledTitle = styled.h2`
  font-size: 22px;
  font-weight:600;
  line-height: 1.5;
  color: #191919;
  ${(props) =>
    props.large &&
    css`
    font-size:21px;
  `}
  ${(props) =>
    props.mypage &&
    css`

    text-align:left;
    font-size:19px;
  `}
  ${(props) =>
    props.bold &&
    css`

    text-align:left;
    font-size:19px;
  `}
`;

function Title({ children,...props }) {
  return <StyledTitle {...props}>{children}</StyledTitle>;
}
export default Title;

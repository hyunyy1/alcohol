import React from "react";
import styled, { css } from "styled-components";

const StyledReview = styled.p`
  font-size: 16px;
  font-weight:400;
  color: #191919;
  margin-bottom:0;
  ${(props) =>
    props.large &&
    css`
    font-size:18px;
  `}
  ${(props) =>
    props.bold &&
    css`
    font-size:16px;
    font-weight:600;
    line-height:2;
  `}
`;

function Regular({ children,...props }) {
  return <StyledReview {...props}>{children}</StyledReview>;
}
export default Regular;

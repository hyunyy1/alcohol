import React from "react";
import styled, { css } from "styled-components";

const StyledAddr = styled.h2`
  font-size: 15px;
  font-weight:400;
  color: #5B5B5B;
  margin-bottom:0;
  float:left;
  ${(props) =>
    props.large &&
    css`
    font-size:15px;
  
  `}
`;

function Address({ children,...props }) {
  return <StyledAddr {...props}>{children}</StyledAddr>;
}
export default Address;

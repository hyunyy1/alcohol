import React from "react";
import styled, { css } from "styled-components";

const StyledBold = styled.b`
  font-size: 22px;
  font-weight:600;
  line-height: 1.5;
  color: #9CD5C2;
  ${(props) =>
    props.large &&
    css`
    font-size:27px;
  
  `}
`;

function Bold({ children,...props }) {
  return <StyledBold {...props}>{children}</StyledBold>;
}
export default Bold;

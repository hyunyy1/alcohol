import React from "react";
import styled from "styled-components";

const StyledComment = styled.div`
  
  padding:5px;
  margin:5px;
  border-bottom:1px solid #DFDFDF;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  .score{
    width:10%;
    font-size:20px;
  }
  p{
    width:90%;
    padding:5px;
    margin:5px;
    font-size:18px;
    text-align:left;
  }
`;
function Comment({ children,...props }){
  return (
    <StyledComment {...props}>
      <div className="score">{props.score}</div>
      <p>{children}</p>
    </StyledComment>
  );
}
export default Comment;

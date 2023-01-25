import React from "react";
import styled, { css } from "styled-components";


const StyledSelect = styled.select`
  background:#fff;
  border:2px solid #9CD5C2;
  color: #9CD5C2;
  border-radius:1rem;
  font-size:17px;
  padding:7px 0;
  cursor:pointer;
  outline:none;
  text-align:center;
  option{
    font-size:17px;
    cursor:pointer;
  }
`;

function Select( {parentFunction} ) {

  const selectEvent = (e) => {
    var cat_val = e.target.value;
    
    // 부모창으로 값 전달
    parentFunction(cat_val);
  }


  return(
    <StyledSelect id = "select_value" onChange={selectEvent}>
      <option value="" selected disabled>주종을 선택하세요.</option>
      <option value="와인">와인🍷</option>
      <option value="맥주">맥주🍺</option>
      <option value="소주">소주🥛</option>
      <option value="칵테일">칵테일🍹</option>
      <option value="막걸리">막걸리🍶</option>
    </StyledSelect>
  );
  
}
export default Select;

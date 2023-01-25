import React from "react";
import styled from "styled-components";

// const StyledInputFile = styled.input`
// display: inline-block;
// height: 40px;
// padding: 0 10px;
// vertical-align: middle;
// border: 1px solid #dddddd;
// width: 78%;
// color: #999999;
// `;
const BtnUpload = styled.div`

width: 10vw;
height: 18vh;
background:#ececec;
color:#191919;
border:2px solid #ececec;
color:#191919;
border-radius: 1em;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-size:20px;
&:hover {
  color: #191919;
}
`;
const IFile = styled.input`
  display:none;
  border:1px solid blue;
  background:#000;
`;
function InputFile({ children,...props }) {
  return(
    // <StyledInputFile readOnly={props.readOnly} type="file" placeholder={props.place} {...props}>{children}</StyledInputFile>
    <>
    <label for="file">
  <BtnUpload autocomplete='off' class="btn-upload">+</BtnUpload>
  </label>
  <IFile type="file" name="file" id="file"></IFile>
  
  
</>
  );
}
export default InputFile;

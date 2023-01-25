import styled from 'styled-components';


const StyledUserImg = styled.div`
  width:250px;
  height:250px;
  border-radius:50%;
  background:gray;
`;


function UserImg({ children,...props }) {
  return (
    <StyledUserImg {...props}>{children}</StyledUserImg>
  );
}

export default UserImg;

import styled from 'styled-components';


const StyledWrapper = styled.div`
  width:99vw;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;


function Wrapper({ children,...props }) {
  return (
    <StyledWrapper {...props}>{children}</StyledWrapper>
  );
}

export default Wrapper;

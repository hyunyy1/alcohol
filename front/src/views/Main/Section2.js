import '../../App.scss';
import styled from 'styled-components';
import Bold from '../../components/Text/Bold';
import Title from '../../components/Text/Title';
import Wrapper from '../../components/Layout/Wrapper';
import Tags from '../../components/Tag/Tags';


const S2Wrap = styled.div`
width:99vw;
height:40vh;
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
`;

function Section2() {
  return (
    <Wrapper>
      <S2Wrap>
        <Title large style={{marginBottom:'2rem'}}>무슨 <Bold large>술</Bold>이 땡기시나요?</Title>
        <Tags></Tags>
      </S2Wrap>
    </Wrapper>
  );
}

export default Section2;

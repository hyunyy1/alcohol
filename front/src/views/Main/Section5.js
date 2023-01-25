import '../../App.scss';
import styled from 'styled-components';
import Bold from '../../components/Text/Bold';
import Title from '../../components/Text/Title';
import Wrapper from '../../components/Layout/Wrapper';
import EditorCards from '../../components/Card/EditorCards';

const S5Wrap = styled.div`
width:99vw;
height:65vh;
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin-bottom:1rem;
`;

function Section5() {
  return (
    <Wrapper>
      <S5Wrap>
        <Title large style={{marginBottom:'60px'}}>에디터 추천 <Bold large>술집</Bold></Title>
        <EditorCards></EditorCards>
      </S5Wrap>
    </Wrapper>
  );
}

export default Section5;

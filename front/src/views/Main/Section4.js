import '../../App.scss';
import styled from 'styled-components';
import Bold from '../../components/Text/Bold';
import Title from '../../components/Text/Title';
import Wrapper from '../../components/Layout/Wrapper';
import RankCards from '../../components/Card/RankCards';

const S4Wrap = styled.div`
width:99vw;
height:19rem;
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
`;

function Section4() {
  return (
    <Wrapper>
      <S4Wrap>
        <Title large style={{marginBottom:'60px'}}>이 달의 <Bold large>리뷰</Bold></Title>
        <RankCards></RankCards>
      </S4Wrap>
    </Wrapper>
  );
}

export default Section4;

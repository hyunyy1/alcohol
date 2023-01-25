import '../../App.scss';
import styled from 'styled-components';
import GrayText from '../../components/Text/GrayText';

const FooterWrap = styled.div`
  width:99vw;
  height:20vh;
  margin-top:auto;
  background:#F4FFFB;
  display:flex;
  flex-direction:column;
  justify-content: center;
`;
function Footer() {
  return (
    <FooterWrap>
      <GrayText style={{marginBottom:"0.5rem"}}>* SNS를 통해 업데이트 소식을 알려드립니다.</GrayText>
      <GrayText style={{marginBottom:"1rem"}}>Copyright ⓒ KOSTA_node_5th_team All rights reserved.</GrayText>
      <GrayText >서비스 이용약관 개인정보처리방침</GrayText>  
    </FooterWrap>
  );
}

export default Footer;

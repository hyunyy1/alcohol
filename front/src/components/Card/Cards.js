import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Card from "./Card";

const StyledCards = styled.ul`
  width:70vw;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  padding:0;
  }
`;

function Cards({ children,...props }) {
  var settings = {
    //page
    dots: true,
    //무한 슬라이드
    infinite: true,
    //화살표
    arrows : true,
    speed: 500,
    // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
    slidesToShow: 1,
    // 스크롤 할 때마다 몇 장씩 넘길 것인가
    slidesToScroll: 1,
    //자동 넘김
    autoplay: false,
    //자동 넘김 속도 ? 
    autoplaySpeed: 3500,
    // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
    pauseOnHover: true,
    
  };
  return(
    
    <Slider {...settings} className="Slider">
      <StyledCards {...props}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </StyledCards>
    </Slider>
    
  );
}
export default Cards;

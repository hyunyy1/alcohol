// src/Login.jsx
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Logo from '../../components/Logo/Logo';
import InputText from '../../components/Input/InputText';
import Select from '../../components/Seclect/Seclect';
import Button from '../../components/Button/Button';
import InsertReview from '../../components/Modal/InsertReview';
import Kakao from './Kakao';
import axios from 'axios';
import Modal from "../../components/Modal/Modal";
const { kakao } = window;




const MapBtnWrap = styled.div`
  z-index:999;
  position : fixed;
  bottom:2vh;
  right:2vw;
  width:13vw;
`;

const MapHeadWrap = styled.div`
z-index:999;
  width:45%;
  position:fixed;
  top:2vh;
  left:2vw;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  button{
    margin-right:1vw;
  }
  .search-form{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    .text{
      width:60%;
      margin-right:1vw;
    }
    .btn{
      width:20%;
      margin-right:1vw;
    }
    select{
      width:28%;
      margin-right:1vw;
      

    }
  }
  
`;

const InputWrap = styled.div`
  width:100%;
  align-items:center;
  
  .search-form{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    .text{
      width:70%;
    }
    .btn{
      width:25%;
    }
  }
`;
const Map = () => {
  const [category, setCategory] = useState('');
  const [mydata2, setMydata2] = useState('')  // shop_name 결과값
  const [mydata3, setMydata3] = useState('')  // shop_category 결과값
  const [mydata4, setMydata4] = useState('')  // Field 결과값
  const [mydata5, setMydata5] = useState('')  // shop_url 결과값
  const [isOpen, setIsOpen] = useState(false); // 모달창

  const navigate = useNavigate();

  function goHome(){
    navigate("/");
  }

  const parentFunction = (cat_val) => {
    // console.log("자식에서 부모로 데이터 넘어옴", cat_val);
    setCategory(cat_val);
  }


  useEffect(()=>{
    doSubmit();

  }, [mydata]);

  var mydata = [];

  const doSubmit = async(e) => {

    const container = document.getElementById('map');
    const options = {
      center:new kakao.maps.LatLng(37.541, 126.986),
      level:7
    };
    
    const map = new kakao.maps.Map(container, options);   

    e.preventDefault();  
    let getInput = document.getElementById('map-search-bar').value;
    // alert(getInput);
    // alert(category);

    var res = await axios.get("http://127.0.0.1:8080/search", {params:{category: category, search: getInput}});

    mydata = res.data;
    console.log(mydata);

    if (mydata.length == 0) {
      alert('검색되는 리뷰가 없습니다 !');
    }
   

    for (let i=0; i < mydata.length; i++) {
      // 마커 이미지 크기
      // let imageSize = new kakao.maps.Size(24, 35); 

      // 마커 이미지 생성
      // let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커 표시 위치
      var markerPosition = new kakao.maps.LatLng(
      mydata[i].longitude,
      mydata[i].latitude
      );

      // 마커 생성
      var marker= new kakao.maps.Marker({
        map: map,
        position: markerPosition,
        title: mydata[i].shop_name,
        clickable: true,              // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정
        // image : markerImage 
      })

      // 인포윈도우
      var iwContent = `<div style="font-size:17px; padding:5px;"> ${mydata[i].shop_name}</div>`;
      var iwPosition = markerPosition;
      var iwRemoveable = true;

      // 인포윈도우 생성
      var infowindow = new kakao.maps.InfoWindow({
        // map: map, 
        // position : iwPosition, 
        content : iwContent,
        removable : iwRemoveable
      });

      var shop_name = mydata[i].shop_name;
      var shop_category = mydata[i].category_name;
      var shop_field = mydata[i].Field;
      var shop_url = mydata[i].shop_url;

      // kakao.maps.event.addListener(
      //   marker,
      //   "mouseover",
      //   makeOverListener(map, marker, infowindow)
      // );      

      // kakao.maps.event.addListener(
      //   marker,
      //   "mouseout",
      //   makeOutListener(infowindow)
      // );
      
      // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
      // function makeOverListener(map, marker, infowindow) {
      //   return function () {
      //     infowindow.open(map, marker);
      //   };
      // }
      
      // // 인포윈도우를 닫는 클로저를 만드는 함수입니다
      // function makeOutListener(infowindow) {
      //   return function () {
      //     infowindow.close();
      //   };
      // }

      kakao.maps.event.addListener(marker, 'click', function(info, mark, shop_name, shop_category, shop_field, shop_url) {
        return function() {
          info.open(map, mark);
          // console.log(shop_name);
          // console.log(shop_category);
          setIsOpen(true);
          setMydata2(shop_name);
          setMydata3(shop_category);
          setMydata4(shop_field);
          setMydata5(shop_url);
        }
      }(infowindow, marker, shop_name, shop_category, shop_field, shop_url));    
    }
    
}



  
  return (
    <>
     <MapHeadWrap>
        <Logo onClick={goHome}>Logo</Logo>
        <form className="search-form" onSubmit={doSubmit} autocomplete="off">
          <Select parentFunction = {parentFunction}></Select>
          <InputText className="text" id="map-search-bar"></InputText>
          <Button info className="btn">검색</Button>
        </form>
      </MapHeadWrap>

      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
      {isOpen && (
      <Modal
      open={isOpen}
      shopname= {mydata2}
      shopcategory= {mydata3}
      shoptext = {mydata4}
      shopurl = {mydata5}
      onClose={() => {
        setIsOpen(false);
      }}
      />
    )}

      {/* <Kakao></Kakao> */}
      <MapBtnWrap>
        <InsertReview></InsertReview>
      </MapBtnWrap>
      
    </>
    
  );
};

export default Map;

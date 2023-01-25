// 필요없음

import React, {useEffect, useState} from "react"
import axios from 'axios';
import Title from "../../components/Text/Title";
import Modal from "../../components/Modal/Modal";

const {kakao} = window;

function Kakao(){

  const [mydata, setMydata] = useState([])  // 결과값
  const [mydata2, setMydata2] = useState('')  // shop_name 결과값
  const [mydata3, setMydata3] = useState('')  // shop_category 결과값
  const [mydata4, setMydata4] = useState('')  // Field 결과값
  const [mydata5, setMydata5] = useState('')  // shop_url 결과값
  const [isOpen, setIsOpen] = useState(false); // 모달창


  useEffect(()=>{
    mapscript(); 
  }, []);
  
  const mapscript = async() => {
    const container = document.getElementById('map');
    const options = {
      center:new kakao.maps.LatLng(37.541, 126.986),
      level:7
    };
    
    const map = new kakao.maps.Map(container, options);    

    const res = await axios.get("http://127.0.0.1:8080/get");
    console.log(res.data);
    // console.log(res.data[0]);
    // console.log(res.data[0].latitude);
    // console.log(res.data[0].shop_name);

    setMydata(res.data);

    // 마커 이미지 주소
    // let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 


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
      var iwContent = `<div> ${mydata[i].shop_name}</div>`;
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
      var shop_category = mydata[i].shop_category;
      var shop_field = mydata[i].Field;
      var shop_url = mydata[i].shop_url;

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
 
  
  return(
    <>
    <div id = "map" style={{width:'100vw', height:'100vh'}}></div>
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
    </>
  );
}





export default Kakao;



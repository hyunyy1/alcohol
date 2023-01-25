import React from 'react';
import styled from 'styled-components';
import Header from '../Main/Header';
import Title from '../../components/Text/Title';
import UserImg from '../../components/Layout/UserImg';
import UserProfile from '../../components/Layout/UserProfile';
import Slide from '../../components/Slide/Slide';
import Bold from '../../components/Text/Bold';
import Footer from '../Main/Footer';
import CommentSlides from"../../components/Slide/CommentSlides";
import Favorites from '../../components/Slide/Favorites';
import MyReviews from '../../components/Slide/MyReviews';
import { useState, useEffect} from 'react';
import axios from 'axios';




const MyPageWrap = styled.div`
  width: 99vw;
  height: auto;
  dispaly: flex;
  flex-direction: column;
  align-items: center;
  .mypage-container {
    width: 99vw;
    margin: 10vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    hr {
      width: 70vw;
      border: none;
      height: 1.5px;
      background: #9cd5c2;
      margin-bottom: 4vh;
    }
    .mypage-content-tab-wrap {
      width: 70vw;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4vh;
      label {
        width: 22vw;
        color: #9cd5c2;
        border-radius: 20px;
        padding: 1vh 0;
        font-size: 26px;
        font-weight: 500;
        border: 1px solid #9cd5c2;
        cursor: pointer;
      }
      input[type="radio"]:checked + label {
        color: #fff;
        background: #9cd5c2;
      }
      input {
        display: none;
      }
    }
    .mypage-content-wrap {
      width: 70vw;
      height: auto;
      #mypage-review-wrap,
      #mypage-comment-wrap,
      #mypage-cart-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        align-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
      }
      #mypage-cart-wrap {
        .mypage-content {
          height: 18vh;
        }
      }
      .mypage-content {
        width: 22vw;
        height: 30vh;
        margin-right: 2vw;
        margin-bottom: 3.5vh;
        padding: 1vh 1.5vw;
        border: 1px solid #9cd5c2;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        :nth-child(3n) {
          margin-right: 0;
        }
        .top-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 2vh;
          .shop_name {
            color: #9cd5c2;
            font-size: 24px;
            font-weight: 600;
          }
          .date {
            color: #9c9c9c;
            font-size: 19px;
            font-weight: 400;
          }
        }
        .shop_addr {
          text-align: left;
          color: #9c9c9c;
          font-size: 19px;
          font-weight: 400;
          margin-bottom: 2vh;
        }
        .shop_review,
        .contents {
          height: 50%;
          color: #191919;
          text-align: left;
          font-size: 20px;
          overflow: hidden;
        }
        .telno {
          font-size: 18px;
          text-align: left;
        }
        .score {
          font-size: 18px;
        }
      }
    }
  }
`;

const ProfileWrap = styled.div`
  width: 50%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .user-img-wrap {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  input {
    font-size: 16px;
    text-align: left;
    margin-bottom: 1vh;
  }
`;


// const Login = () => {
function Login () {

  const [users, setUsers] = useState([]);
  const [userReview, setUserReview] = useState([]);
  const [userComment, setUserComment] = useState([]);
  const [userCart, setUserCart] = useState([]);


 
  // const [hasError, setHasError] = useState(false);

  // useEffect(() => {
  //     fetch('http://localhost:8000/mypageInfo')
  //        .then(response =>response.json())
  //        .then(res => setUsers(res))
  //        .catch(err => setHasError(true))
  // },[]);

  useEffect(() => {
    axios.get('http://localhost:8080/mypageInfo')
         .then(res =>{
            //나의정보
            setUsers(res.data.mypageInfo);
            console.log(res.data.mypageInfo);
            //나의 리뷰
            setUserReview(res.data.mypageReview);
            console.log(res.data.mypageReview);
            //나의 댓글
            setUserComment(res.data.mypageComment);
            console.log(res.data.mypageComment);
            //찜하기
            setUserCart(res.data.mypageCart);
            console.log(res.data.mypageCart);
         })
         .catch(err => console.log(err))
  },[]);

  const tabFunction = (e) => {
    console.log(e.target.id);
    const getReview = document.getElementById("mypage-review-wrap");
    const getComment = document.getElementById("mypage-comment-wrap");
    const getCart = document.getElementById("mypage-cart-wrap");
    if (e.target.id == "review") {
      getReview.style.display = "flex";
      getComment.style.display = "none";
      getCart.style.display = "none";
    } else if (e.target.id == "comment") {
      getReview.style.display = "none";
      getComment.style.display = "flex";
      getCart.style.display = "none";
    } else if (e.target.id == "cart") {
      getReview.style.display = "none";
      getComment.style.display = "none";
      getCart.style.display = "flex";
    }
  };
  // const best = "😍";
  // const normal = "😀";
  // const soso = "😥";
  // if (comment.score.value == 10) {
  //   return best;
  // } else if (comment.score.value == 5) {
  //   return normal;
  // } else if (comment.score.value == 1) {
  //   return soso;
  // }
  return (
      
    <>
    {/* {users.map(user => <h1 key={user}>{user.user_email}</h1>)} */}
    {/* {users && users.map(user => <h1 key={user}>{user.user_email}</h1>)} */}
    <MyPageWrap>
      <Header></Header>
        <Title className="mypage-title"></Title>
      <ProfileWrap>
        <div className='user-img-wrap'>
          <UserImg>1</UserImg>
        </div>  
        {/* 내정보 map에서 여러개 key값 정할때 반드시 고유값을 반드시 중복사용하지 않기*/}
        {/* <UserProfile name="손흥민" nickname="sonny" email="abc@abc.com" num="010-1111-1111"></UserProfile> */}
        {users.map((user) => (
            <div key={user.user_id}>
              <UserProfile
                name={user.user_name}
                nickname={user.user_nickname}
                email={user.user_email}
                num={user.user_phonenumber}
              ></UserProfile>
            </div>
          ))}
        {/* 내정보 */}
      </ProfileWrap>
      <div className="mypage-container">
          {/* --------------------- 탭 --------------------- */}
          <form className="mypage-content-tab-wrap" onChange={tabFunction}>
            <input defaultChecked type="radio" id="review" name="content-tab" />
            <label for="review">내가 쓴 리뷰</label>

            <input type="radio" id="comment" name="content-tab" />
            <label for="comment">내가 쓴 댓글</label>

            <input type="radio" id="cart" name="content-tab" />
            <label for="cart">내가 찜한 곳</label>
          </form>
          <hr></hr>
          {/* ---------------------여기서부터 컨텐츠!!!!---------------- */}
          <div className="mypage-content-wrap">
            {/*--------------------- 내리뷰 ---------------------*/}

            <div id="mypage-review-wrap">
              {userReview.map((review) => (
                <div className="mypage-content" key={review.shop_id}>
                  <div className="top-content">
                    <p className="shop_name">{review.shop_name}</p>
                    <p className="date">{review.reg_dtm}</p>
                  </div>
                  <p className="shop_addr">{review.shop_addr}</p>
                  <p className="shop_review">{review.Field}</p>
                </div>
              ))}
            </div>
            {/*--------------------- 내리뷰 ---------------------*/}
            {/*--------------------- 내댓글 ----------------------*/}
            <div id="mypage-comment-wrap" style={{ display: "none" }}>
              {userComment.map((comment) => (
                <div className="mypage-content" key={comment.comment_idx}>
                  <div className="top-content">
                    <p className="shop_name">{comment.shop_name}</p>
                    <p className="score">{comment.score}</p>
                  </div>
                  <p className="shop_addr">{comment.shop_addr}</p>
                  <p className="contents">{comment.contents}</p>
                </div>
              ))}
            </div>
            {/*---------------------내댓글 ---------------------*/}
            {/*--------------------- 찜하기 ---------------------*/}
            <div id="mypage-cart-wrap" style={{ display: "none" }}>
              {/* 만약 전화번호 없으면 빈값 */}
            </div>
            {userCart.map((cart) => (
              <div className="mypage-content" key={cart.shop_id}>
                <div className="top-content">
                  <p className="shop_name">{cart.shop_name}</p>
                </div>
                <p className="shop_addr">{cart.shop_addr}</p>
                <p className="telno">{cart.telno}</p>
              </div>
            ))}
          </div>
          {/*--------------------- 찜하기 ---------------------*/}
        </div>
        {/* 여기가 컨텐츠 끝 */}
        <Footer></Footer>
      </MyPageWrap>
    </>
  );
}
export default Login;

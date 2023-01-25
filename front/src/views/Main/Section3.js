import "../../App.scss";
import styled from "styled-components";
import Bold from "../../components/Text/Bold";
import Title from "../../components/Text/Title";
import Slide from "../../components/Slide/Slide";
import HomeModal from "../../components/Modal/HomeModal";
import { useEffect, useState } from "react";

const S3Wrap = styled.div`
  width: 99vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .recently-reviews {
    overflow-x: scroll;
    overflow-y: hidden;

    width: 70%;

    .testWrap {
      width: auto;
      height: 35vh;
      display: flex;
      flex-direction: row;
      justify-content: left;
      .review-card {
        cursor: pointer;
        width: 20vw;
        height: 35vh;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: top;
        border: 1px solid #9cd5c2;
        border-radius: 20px;
        .top-content {
          width: 20vw;
          padding: 1vh 2vw;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .shop_name {
            font-size: 23px;
            font-weight: 600;
            color: #9cd5c2;
          }
          .date {
            font-size: 18px;
            font-weight: 400;
            color: #9c9c9c;
          }
        }
        .shop_addr,
        .review {
          width: 20vw;
          padding: 0.5vh 2vw;
          font-size: 19px;
          color: #9c9c9c;
          font-weight: 400;
          text-align: left;
        }
        .review {
          overflow: hidden;
          color: #191919;
        }
      }
    }
  }
`;

const recentlyReviewsArr = [
  {
    id: 1,
    shop_name: "Butter",
    shop_addr: "서울시 강남구 어쩌꾸 저쩌꾸 123-123",
    date: "2022.12.25",
    review:
      "리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.",
  },
  {
    id: 2,
    shop_name: "BTS",
    shop_addr: "서울시 강남구 어쩌꾸 저쩌꾸 123-123",
    date: "2022.12.20",
    review:
      "리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.",
  },
  {
    id: 3,
    shop_name: "Son",
    shop_addr: "서울시 강남구 어쩌꾸 저쩌꾸 123-123",
    date: "2022.12.25",
    review:
      "리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.",
  },
  {
    id: 4,
    shop_name: "한반두",
    shop_addr: "서울시 강남구 어쩌꾸 저쩌꾸 123-123",
    date: "2022.12.12",
    review:
      "리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.",
  },
  {
    id: 5,
    shop_name: "넥스트 도어",
    shop_addr: "서울시 강남구 어쩌꾸 저쩌꾸 123-123",
    date: "2022.12.02",
    review:
      "리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.",
  },
  {
    id: 6,
    shop_name: "슬랩",
    shop_addr: "서울시 강남구 어쩌꾸 저쩌꾸 123-123",
    date: "2022.12.11",
    review:
      "리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.",
  },
  {
    id: 7,
    shop_name: "파운틴",
    shop_addr: "서울시 강남구 어쩌꾸 저쩌꾸 123-123",
    date: "2022.12.24",
    review:
      "리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.",
  },
  {
    id: 8,
    shop_name: "싱싱잇",
    shop_addr: "서울시 강남구 어쩌꾸 저쩌꾸 123-123",
    date: "2022.12.23",
    review:
      "리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.",
  },
  {
    id: 9,
    shop_name: "식스나잇",
    shop_addr: "서울시 강남구 어쩌꾸 저쩌꾸 123-123",
    date: "2022.12.22",
    review:
      "리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.리뷰입니다.",
  },
];
function ResecntlyReviews({ shop_name, shop_addr, review, date }) {
  const [isOpen, setIsOpen] = useState(false);

  // useOutSideClick(modalRef, handleClose);
  // useEffect(() => {
  //   const $body = document.querySelector("body");
  //   $body.style.overflow = "hidden";
  //   return () => ($body.style.overflow = "auto");
  // }, []);

  const RecentlyReviewClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="review-card" onClick={RecentlyReviewClick}>
      {isOpen && (
        <HomeModal
          open={isOpen}
          // positions={posData}
          shop_name={shop_name}
          date={date}
          shop_addr={shop_addr}
          review={review}
          onClose={() => {
            setIsOpen(false);
          }}
        ></HomeModal>
      )}
      <div className="top-content">
        <h1 className="shop_name">{shop_name}</h1>
        <p className="date" date={date}>
          {date}
        </p>
      </div>
      <p className="shop_addr">{shop_addr}</p>
      <p className="review">{review}</p>
    </div>
  );
}

function Section3() {
  return (
    <S3Wrap>
      <Title large style={{ marginBottom: "60px" }}>
        최근 작성된 <Bold large>리뷰</Bold>
      </Title>
      <div className="recently-reviews">
        <div className="testWrap">
          {recentlyReviewsArr.map((reviews) => (
            <ResecntlyReviews
              key={reviews.id}
              shop_name={reviews.shop_name}
              date={reviews.date}
              shop_addr={reviews.shop_addr}
              review={reviews.review}
            />
          ))}
        </div>
      </div>
      {/* <Slide></Slide> */}
    </S3Wrap>
  );
}

export default Section3;

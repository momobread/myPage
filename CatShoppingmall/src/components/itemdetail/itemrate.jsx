import { useState } from "react";
import userRate from "../../../public/userrate";
import User from "/public/user.js";
function ItemRate() {
  return (
    <div className="itemrate_wrap">
      <PreviewRate />
      <ReviewContent />
    </div>
  );
}

function PreviewRate() {
  return (
    <div className="item_preview_rate_wrap">
      <div className="item_rate_title">Real 후기</div>
      <div className="item_preview_rate">
        <div className="item_average_rate">
          <div>총 평점</div>
          <div>⭐️⭐️⭐️⭐️</div>
        </div>
        <ul>
          <Ratebar>아주 만족해요</Ratebar>
          <Ratebar>조금 만족해요</Ratebar>
          <Ratebar>만족해요</Ratebar>
          <Ratebar>조금 불만족해요</Ratebar>
          <Ratebar>아주 불만족해요</Ratebar>
        </ul>
      </div>
      {/* <div>포장상태</div>
      <div>배송속도</div>
      <div>사용성</div> */}
      <div className="item_rate_img">
        <div>리뷰 사진</div>
        <Reviewimg />
        <Reviewimg />
      </div>
    </div>
  );
}
function Ratebar({ children }) {
  return (
    <li className="rate_bar_content">
      <div>{children}</div>
      <div className="rate_bar_bg">
        <div className="rate_bar"></div>
      </div>
      <div> 57%</div>
    </li>
  );
}

function Reviewimg() {
  return (
    <>
      <img src={userRate[0].img} />
      <img src={userRate[0].img} />
    </>
  );
}

function ReviewContent() {
  const [reviewNum, setReviewNum] = useState(1);
  return (
    <div className="review_content">
      <ReviewFilter setReviewNum={setReviewNum} />
      {reviewNum == 1 ? (
        <LikeReview />
      ) : reviewNum == 2 ? (
        <BestReview />
      ) : reviewNum == 3 ? (
        <NewReview />
      ) : (
        -1
      )}
    </div>
  );
}
function ReviewFilter({ setReviewNum }) {
  return (
    <div className="review_filter">
      <div>
        <button onClick={() => setReviewNum(1)}>좋아요순</button>
        <button onClick={() => setReviewNum(2)}>베스트순</button>
        <button onClick={() => setReviewNum(3)}>최신순</button>
      </div>
      <div>
        <button>🔍</button>
        <button>모든별점보기</button>
      </div>
    </div>
  );
}
function ReviewNav() {
  return <div className="review_nav_wrap"></div>;
}

function LikeReview() {
  return (
    <div className="liked_content_wrap">
      {/* 좋아요순 리뷰입니다 - 1234 + */}
      <LikedContent />
    </div>
  );
}

function LikedContent() {
  return (
    <>
      {userRate.map((user, i) => (
        <div className="liked_content" key={i}>
          <div className="liked_user">
            작성자 : {user.userNum == User[i].userNum ? User[i].id : ""}
          </div>
          <div className="liked_title">{user.title}</div>
          <img src={user.img} />
          <div className="liked_review">{user.review}</div>
          <div className="liked_rate">{"⭐️".repeat(user.rate)}</div>
          <div>
            <i className="fa-solid fa-heart" style={{ color: "#f7c0ed" }}></i>
            <span>{user.liked}</span>
          </div>
        </div>
      ))}
    </>
  );
}

function BestReview() {
  return <div>best review 입니다 - 1234 +</div>;
}
function NewReview() {
  return <div>최신순 리뷰입니다 - 1234 +</div>;
}

export default ItemRate;

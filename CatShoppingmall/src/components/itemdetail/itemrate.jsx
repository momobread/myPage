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
    <div>
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
      <button onClick={() => setReviewNum(1)}>좋아요순</button>
      <button onClick={() => setReviewNum(2)}>베스트순</button>
      <button onClick={() => setReviewNum(3)}>최신순</button>
      <button>🔍</button>
      <button>모든별점보기</button>
    </div>
  );
}
function LikeReview() {
  return (
    <div>
      좋아요순 리뷰입니다 - 1234 +
      <LikedContent />
    </div>
  );
}

function LikedContent() {
  return (
    <div>
      {userRate.map((user, i) => (
        <div key={i}>
          <div>{user.review}</div>
          <div>{user.rate}</div>
          <img src={user.img} width={250} />
          <div>{User[0].id}</div>
        </div>
      ))}
    </div>
  );
}

function BestReview() {
  return <div>best review 입니다 - 1234 +</div>;
}
function NewReview() {
  return <div>최신순 리뷰입니다 - 1234 +</div>;
}

export default ItemRate;

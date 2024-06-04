function ItemRate() {
  return (
    <div className="itemrate_wrap">
      <PreviewRate />
      <ReviewContent />
      <div>좋아요 순 / 최신순 / 베스트 순</div>
      <div>키워드 검색 🔍</div>
      <div>별점순</div>
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
      <div>사진사진사진사진</div>
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
function ReviewContent() {
  return (
    <div>
      <ReviewFilter />
      <LikeReview />
      <BestReview />
      <NewReview />
    </div>
  );
}
function ReviewFilter() {
  return (
    <div>
      <button>좋아요순</button>
      <button>베스트순</button>
      <button>최신순</button>
      <button>🔍</button>
      <button>모든별점보기</button>
    </div>
  );
}
function LikeReview() {
  return <div>좋아요순 리뷰입니다 - 1234 +</div>;
}

function BestReview() {
  return <div>best review 입니다 - 1234 +</div>;
}
function NewReview() {
  return <div>최신순 리뷰입니다 - 1234 +</div>;
}

export default ItemRate;

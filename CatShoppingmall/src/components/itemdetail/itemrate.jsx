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
    <div>
      <div>총 별점</div>
      <div>5점</div>;<div>4점</div>;<div>3점</div>;<div>2점</div>;<div>1점</div>
      <div>포장상태</div>
      <div>배송속도</div>
      <div>사용성</div>
      <div>사진사진사진사진</div>
    </div>
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

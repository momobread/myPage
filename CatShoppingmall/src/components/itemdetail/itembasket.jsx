function ItemBasket() {
  return (
    <div className="item_cart_wrap">
      <div className="item_add">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
      <div className="item_cart">
        <div>총상품금액(수량) :총 수량 1개 73000 원</div>
        <button>바로구매</button>
        <button>장바구니 담기</button>
        <button>찜하기</button>
        <button>문의하기</button>
      </div>
    </div>
  );
}
export default ItemBasket;

import Header from "./common/header";
import Nav from "./common/nav";
import "/src/style/itemdetail.css";
{
  /* hello
      {console.log(itemDetail)}
      <button onClick={() => handleBack()}>button</button> */
}
function ItemDetailPage({ itemDetail, handleBack }) {
  return (
    <div className="item_contentWrap">
      <Header />
      <Nav />
      <DetailContent itemDetail={itemDetail} />
    </div>
  );
}
function DetailContent({ itemDetail }) {
  return (
    <div className="item_content">
      <ItemInfo itemDetail={itemDetail} />
      <ItemContent />
      <ItemRate />
    </div>
  );
}

function ItemInfo({ itemDetail }) {
  return (
    <div className="item_info_wrap">
      <div className="item_img">
        <img src={itemDetail.img} />
      </div>
      <div className="item_info">
        <div className="item_basic_info">
          <span>{itemDetail.title}</span>
          <span>{itemDetail.text}</span>
          <span>{itemDetail.price}</span>
        </div>
        <button className="share_button">
          <span>
            <img src="/src/assets/icon/share.png" />
          </span>
        </button>
        <ItemCart />
      </div>
    </div>
  );
}
function ItemCart() {
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
function ItemContent() {}
function ItemRate() {}
export default ItemDetailPage;

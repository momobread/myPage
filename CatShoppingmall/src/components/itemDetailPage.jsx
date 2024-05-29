import Footer from "/src/components/common/footer.jsx";
import Header from "./common/header";
import Nav from "./common/nav";
import ItemContent from "./itemdetail/itemcontent";
import ItemInfo from "/src/components/itemdetail/iteminfo.jsx";
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
      <div className="item_content">
        <ItemInfo itemDetail={itemDetail} />
        <ItemContent itemDetail={itemDetail} />
      </div>
      <Footer />
    </div>

    // 풋터 추가하기
  );
}

export default ItemDetailPage;

// import { useState } from "react";

import "./components/main/style/index.css";
import "./components/main/style/mediaquery.css";
import "../public/reset.css";
import MainPage from "./components/mainPage";
import { useState } from "react";
import ItemDetailPage from "./components/itemDetailPage";

//어떻게 다음 아이템을 보여줄 것인가?
// onclick시 state에 index 4567 보여주기
//

function App() {
  const [pageIndex, setPageIndex] = useState(1);
  const [itemDetail, setItemDetail] = useState([]);

  function pageNum(e) {
    setPageIndex(e);
  }
  function detailContent(item) {
    setItemDetail(item);
  }

  return (
    <div className="container">
      {pageIndex == 1 && (
        <MainPage pageNum={pageNum} detailContent={detailContent} />
      )}
      {pageIndex == 2 && (
        <ItemDetailPage itemDetail={itemDetail}></ItemDetailPage>
      )}
    </div>
  );
}

export default App;

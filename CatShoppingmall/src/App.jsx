// import { useState } from "react";

import "/src/style/main.css";
import "/src/style/mediaquery.css";
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
  const [backpage, setBackPage] = useState(0);

  function pageNum(e) {
    setPageIndex(e);
    setBackPage(pageIndex);
  }
  function detailContent(item) {
    setItemDetail(item);
  }
  function handleBack() {
    setPageIndex(backpage);
  }

  return (
    <div className="container">
      {pageIndex == 1 && (
        <MainPage pageNum={pageNum} detailContent={detailContent} />
      )}
      {pageIndex == 2 && (
        <ItemDetailPage
          itemDetail={itemDetail}
          handleBack={handleBack}
        ></ItemDetailPage>
      )}
    </div>
  );
}

export default App;

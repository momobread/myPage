// import { useState } from "react";

import "/src/style/main.css";
import "/src/style/mediaquery.css";
import "../public/reset.css";
import MainPage from "./components/mainPage";
import { useState } from "react";
import ItemDetailPage from "./components/itemDetailPage";
import Login from "./components/loginPage";
import User from "../public/user";

//어떻게 다음 아이템을 보여줄 것인가?
// onclick시 state에 index 4567 보여주기
//

function App() {
  const [pageIndex, setPageIndex] = useState(1); //현재페이지
  const [itemDetail, setItemDetail] = useState([]); //상품디테일 정보
  const [backpage, setBackPage] = useState(0); //전 페이지
  const [user, setUser] = useState(User); //user배열
  const [islogin, setIslogin] = useState(false); //로그인성공실패
  //main 1 ....
  // detail  2....
  //login 3....

  console.log(user);
  console.log("메인페이지 로그인", islogin);
  function handleUser(v) {
    setUser((user) => [...user, v]);
  }

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
      {pageIndex == 3 && (
        <Login
          handleUser={handleUser}
          handleBack={handleBack}
          setIslogin={setIslogin}
          user={user}
        />
      )}
    </div>
  );
}

export default App;

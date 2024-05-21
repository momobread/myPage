// import { useState } from "react";
import Header from "./components/main/header";
import Nav from "./components/main/nav";
import ADD from "./components/main/add";
import ItemList from "./components/main/itemlist";
import Recommand from "./components/main/recommand";
import Footer from "./components/main/footer";
import "./components/main/style/index.css";
import "./components/main/style/mediaquery.css";
import "../public/reset.css";
import Information from "./components/main/information";
import bestitems from "../public/bestitem";
import newitems from "../public/newitem";
import { useState } from "react";

//어떻게 다음 아이템을 보여줄 것인가?
// onclick시 state에 index 4567 보여주기
//

function App() {
  const [bestNum, setBestNum] = useState(0);
  const [newNum, setNewNum] = useState(0);
  function handleNextBestItem() {
    setBestNum((v) => v + 1);
  }
  function handlePreviousBestItem() {
    setBestNum((v) => v - 1);
  }
  function handleNextNewItem() {
    setNewNum((v) => v + 1);
  }
  function handlePreviousNewItem() {
    setNewNum((v) => v - 1);
  }

  // function handleNext

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <Nav />
      <ADD />
      <div className="content">
        <ItemList
          items={bestitems[bestNum]}
          handleNext={handleNextBestItem}
          handlePrevious={handlePreviousBestItem}
        >
          bestItem
        </ItemList>
        <ItemList
          items={newitems[newNum]}
          handleNext={handleNextNewItem}
          handlePrevious={handlePreviousNewItem}
        >
          NewItem
        </ItemList>
        <Recommand />
        <Information />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

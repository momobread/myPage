import { useState } from "react";
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

function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <Nav />
      <ADD />
      <section>
        <ItemList />
        <ItemList />
        <Recommand />
        <Information />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

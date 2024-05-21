// import items from "../../../public/item";

function ItemList({ children, items, handleNext, handlePrevious }) {
  return (
    <div className="ItemListWrap">
      <ItemsTitle items={items}>{children}</ItemsTitle>
      <div className="itemListContentWrap">
        <button onClick={() => handlePrevious()}>-</button>
        <ItemsContent items={items} />
        <button onClick={() => handleNext()}>+</button>
      </div>
    </div>
  );
}

function ItemsTitle({ children }) {
  return (
    <>
      <div className="ItemListTitle">
        <span>{children}</span>
      </div>
    </>
  );
}
function ItemsContent({ items }) {
  return (
    <>
      <ul className="itemListContent">
        {/* items &&를 붙여야 데이터를 받아왔을때 뒤에 조건을 수행한다 */}
        {/* react가 item 데이터가 오기 전에 바로 랜더링 하려고 하기 때문에  undefined에러 뜬다*/}

        {items &&
          items.map((item) => (
            <li key={item.id} className="items">
              <img src={item.img} />
              <span>{item.title}</span>
              <span>{item.price}</span>
              <span>{item.text}</span>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ItemList;

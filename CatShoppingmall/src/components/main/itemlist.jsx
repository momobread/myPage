// import items from "../../../public/item";

import ContentTitle from "./contentTitle";

function ItemList({
  children,
  items,
  handleNext,
  handlePrevious,
  pageNum,
  detailContent,
}) {
  return (
    <div className="ItemListWrap">
      <div className="pc_title">
        {/* <ItemsTitle items={items}>{children}</ItemsTitle> */}
        <div className="ItemListTitle">
          <ContentTitle>{children}</ContentTitle>
        </div>
      </div>
      <div className="itemListContentWrap">
        <button onClick={() => handlePrevious()}>previous</button>
        <ItemsContent
          items={items}
          pageNum={pageNum}
          detailContent={detailContent}
        />
        <button onClick={() => handleNext()}>next</button>
      </div>
    </div>
  );
}

// function ItemsTitle({ children }) {
//   return (
//     <>
//       <div className="ItemListTitle">
//         <span>{children}</span>
//       </div>
//     </>
//   );
// }
function ItemsContent({ items, pageNum, detailContent }) {
  return (
    <>
      <ul className="itemListContent">
        {/* items &&를 붙여야 데이터를 받아왔을때 뒤에 조건을 수행한다 */}
        {/* react가 item 데이터가 오기 전에 바로 랜더링 하려고 하기 때문에  undefined에러 뜬다*/}

        {items &&
          items.map((item) => (
            <li
              key={item.id}
              className="items"
              onClick={() => {
                pageNum(2);
                detailContent(item);
              }}
            >
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

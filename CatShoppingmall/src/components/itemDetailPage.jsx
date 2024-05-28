export default function ItemDetailPage({ itemDetail, handleBack }) {
  return (
    <div>
      hello
      {console.log(itemDetail)}
      <button onClick={() => handleBack()}>button</button>
    </div>
  );
}

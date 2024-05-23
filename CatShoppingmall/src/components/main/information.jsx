import ContentTitle from "./contentTitle";

function Information({ children }) {
  return (
    <div className="informationWrap">
      <ContentTitle>{children}</ContentTitle>
    </div>
  );
}

export default Information;

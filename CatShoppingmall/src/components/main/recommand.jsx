import ContentTitle from "./contentTitle";

function Recommand({ children }) {
  return (
    <div className="recommandWrap">
      <ContentTitle>{children}</ContentTitle>
      <div className="recommandContent">
        <RecommanVideo />
        <RecommandContent />
      </div>
    </div>
  );
}

function RecommanVideo() {
  return (
    <ul className="recommandVideo">
      <li>
        <video controls autoPlay loop muted playsInline>
          <source src="src/assets/video/apple정수기.mp4" />
        </video>
      </li>
      <li>
        <video controls autoPlay loop muted playsInline>
          <source src="src/assets/video/apple정수기2.mp4" />
        </video>
      </li>
      <li>
        <video controls autoPlay loop muted playsInline>
          <source src="src/assets/video/apple정수기3.mp4" />
        </video>
      </li>
    </ul>
  );
}

function RecommandContent() {
  return <div>hello</div>;
}

export default Recommand;

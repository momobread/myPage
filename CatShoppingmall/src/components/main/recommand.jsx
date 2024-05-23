import ContentTitle from "./contentTitle";

function Recommand({ children }) {
  return (
    <div className="recommandWrap">
      <ContentTitle>{children}</ContentTitle>
      <div className="recommandContent">
        <RecommanVideo />
        <div className="recommandTextWrap">
          <ul className="recommandText">
            <RecommandText>
              {["hello", "content", "⭐️⭐️⭐️", "_1"]}
            </RecommandText>
            <RecommandText>
              {["hello", "content", "⭐️⭐️⭐️", "_2"]}
            </RecommandText>
            <RecommandText>
              {["hello", "content", "⭐️⭐️⭐️", "_3"]}
            </RecommandText>
          </ul>
        </div>
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

function RecommandText({ children }) {
  return (
    <li className={`recommand${children[3]}`}>
      <RecommandTitle title={children[0]} />
      <RecommandSubstance text={children[1]} />
      <RecommandRate rate={children[2]} />
    </li>
  );
}

function RecommandTitle({ title }) {
  return <div>{title}</div>;
}

function RecommandSubstance({ text }) {
  return <div>{text}</div>;
}
function RecommandRate({ rate }) {
  return <span>{rate}</span>;
}

export default Recommand;

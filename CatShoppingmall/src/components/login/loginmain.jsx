function Loginmain({
  setId,
  setPw,
  pageNum,
  setLoginindex,
  checkUser,
  id,
  pw,
}) {
  return (
    <div>
      로그인페이지 입니다
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <input type="text" onChange={(e) => setPw(e.target.value)} />
      <button
        onClick={() => {
          checkUser(id, pw);
          pageNum(1);
        }}
      >
        로그인
      </button>
      {/* <button onClick={() => pageNum(31)}>회원가입</button> */}
      <button onClick={() => setLoginindex(31)}>회원가입</button>
    </div>
  );
}

export default Loginmain;

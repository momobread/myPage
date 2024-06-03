function Membership({ setId, setPw, handleUser, NewUser, setLoginindex }) {
  return (
    <div className="membership_wrap">
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <input type="text" onChange={(e) => setPw(e.target.value)} />
      <button
        onClick={() => {
          handleUser(NewUser);
          setLoginindex(3);
        }}
      >
        {" "}
        회원가입
      </button>
    </div>
  );
}

export default Membership;

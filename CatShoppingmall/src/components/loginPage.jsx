import { useState } from "react";
import User from "/public/user.js";

function Login({ handleUser, handleBack, setIslogin, user }) {
  //input정보기억 => 객체로 push 해버리자
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const NewUser = { id, pw };
  let userNum = -1;

  function checkUser(id, pw) {
    // console.log(User.id);
    // console.log(User.pw);
    //아이디가 존재하나요?

    user.forEach((v, i) => {
      return v.id == id ? (userNum = i) : -1;
    });

    if (userNum > -1) {
      user[userNum].pw == pw ? setIslogin(true) : setIslogin(false);
      console.log("들어옴");
    }
    console.log(userNum);
    //비번이 일치하나요?
  }

  console.log(id, pw); //객체 구조분해할당 id:id,pw:pw

  return (
    <div>
      <button onClick={() => handleBack()}>뒤로가기</button>
      로그인페이지 입니다
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <input type="text" onChange={(e) => setPw(e.target.value)} />
      <button onClick={() => checkUser(id, pw)}>로그인</button>
      <button onClick={() => handleUser(NewUser)}> 회원가입</button>
    </div>
  );
}

export default Login;

function Nav() {
  return (
    <div className="nav">
      <div className="tablet_login_button">
        {/* <a href="./loginPage/login.html" id="login_button">
          Login
        </a> */}
      </div>

      <div className="search">
        <input
          id="search"
          type="search"
          placeholder="원하시는 상품을 입력해 주세요."
          autocomplete="off"
        />
      </div>
      <div className="nav_right_wrap">
        <div className="login_button">
          <a href="/loginPage/login.html">Login</a>
        </div>
        <div className="shopping_cart_button">
          <a href="./shoppingCart/shoppingCart.html">
            <img src="/src/assets/header_nav_bar_icon.png" />
          </a>
        </div>
        <div className="nav_menu">
          <img src="/src/assets/shopping_icon.png" />
        </div>
      </div>
    </div>
  );
}
export default Nav;

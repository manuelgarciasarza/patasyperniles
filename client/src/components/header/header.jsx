import NavBar from "../navBar/navBar";
import SearchBar from "../searchBar/searchBar";
import logo from "../../img/logo.png";
import cart from "../../img/MdiCartOutline.png";

import style from "./header.module.css";

function Header() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.logo}>
          <img src={logo} />
        </div>
        <div className={style.headerRight}>
          <NavBar />
          <SearchBar />
        </div>
        <div className={style.cart}>
          <img className={style.cartImg} src={cart} />
        </div>
      </div>
    </div>
  );
}

export default Header;

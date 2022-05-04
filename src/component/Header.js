import More from "../image/more.svg";
import Logo from "../image/headerLogo.svg";
import Search from "../image/search.svg";
import User from "../image/user.svg";
import "../style/header.css";

function Header() {
  return (
    <header className="d-flex w-100 header">
      <img src={More} alt="" className="order-0 ms-2 w-50" />
      <div className="d-flex col-6 logo">
        <img src={Logo} alt="" />
        <h2>Food Delivery</h2>
      </div>
      <div className="headerMenu col-4">
        <img src={Search} alt="" />
        <img src={User} alt="" />
      </div>
    </header>
  );
}

export default Header;

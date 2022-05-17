import More from "../image/more.svg";
import Logo from "../image/headerLogo.svg";
import Search from "../image/search.svg";
import User from "../image/user.svg";
import Arrow from "../image/menu/arrow.svg";
import Basket from "../image/basket.svg";
import "../style/header.css";
import Login from "./Login";

function Header() {
  return (
    <header className="d-flex w-100 header">
      <div className="drop-menu d-md-none">
        <div class="dropdown">
          <button
            class="btn "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={More} alt="" className="order-0 ms-2 " />
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <div className="drop-list">
              <li className="d-flex">
                <a class="dropdown-item" href="/">
                  <div>Хоолны цэс</div>
                </a>
                <img src={Arrow} alt="" />
              </li>
              <hr />
              <li className="d-flex">
                <a class="dropdown-item" href="/">
                  <div>Хүргэлтийн бүс</div>
                </a>
                <img src={Arrow} alt="" />
              </li>
            </div>
            <div className="drop-list">
              <li className="d-flex">
                <a class="dropdown-item" href={<Login />}>
                  <div>Хэрэглэгчийн мэдээлэл</div>
                </a>
                <img src={Arrow} alt="" />
              </li>
              <hr />
              <li className="d-flex">
                <a class="dropdown-item" href="/">
                  <div>Миний захиалга</div>
                </a>
                <img src={Arrow} alt="" />
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="d-flex  logo ">
        <img src={Logo} alt="" />
        <h2>Food Delivery</h2>
      </div>
      <div className="d-none d-md-flex navbarUl">
        <ul className="d-flex navList">
          <li>НҮҮР</li>
          <li>ХООЛНЫ ЦЭС</li>
          <li>ХҮРГЭЛТИЙН БҮС</li>
        </ul>
      </div>
      <div className="headerMenu col-4 col-lg-6 d-flex">
        <a href="/" className="d-lg-none">
          <img src={Search} alt="" />
        </a>
        <input
          type="search"
          name=""
          id="searchInput"
          className="d-none d-lg-block"
          placeholder="Хайх"
        />
        <a href="/" className="d-none d-md-flex">
          <img src={Basket} alt="" />
          <span className="d-none d-lg-block">Сагс</span>
        </a>
        <a href={<Login />} className>
          <img src={User} alt="" className="" />
          <span className="d-none d-lg-block">Нэвтрэх</span>
        </a>
      </div>
    </header>
  );
}

export default Header;

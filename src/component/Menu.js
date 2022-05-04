import "../style/menu.css";
import Arrow from "../image/menu/arrow.svg";

function Menu(props) {
  return (
    <>
      <div className="menu-line d-flex  mb-2">
        <div className="menu-title "></div>
        <div className="d-flex menu-info w-100">
          <span>{props.menuTitle}</span>
          <img src={Arrow} alt className="d-lg-none arrow-2" />
        </div>
        <div className="d-flex see-more">
          <a href="#">
            <span className="ms-3 d-none"> Бүгдийг харах </span>
            {/* <img src="./pics/icon/right-arrow.svg" alt className="arrow" /> */}
          </a>
        </div>
      </div>
    </>
  );
}

export default Menu;

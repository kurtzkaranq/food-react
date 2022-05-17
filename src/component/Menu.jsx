import "../style/menu.css";
import Arrow from "../image/menu/arrow.svg";
import Foods from "./Foods";
const foodData = [
  {
    name: "Зайрмаг",
    price: "4,800₮",
    img: "../image/food/food1.svg",
    discount: 20,
    discount_price: "6,800₮",
    category: "Хямдралтай",
  },
  {
    name: "Панкейк",
    price: "4,800₮",
    img: "../image/food/food2.svg",
    discount: 20,
    discount_price: "6,800₮",
    category: "Хямдралтай",
  },
  {
    name: "Өглөөний хоол",
    price: "4,800₮",
    img: "../image/food/food3.svg",
    discount: 20,
    discount_price: "6,800₮",
    category: "Хямдралтай",
  },
  {
    name: "Банана сендвич",
    price: "4,800₮",
    img: "../image/food/food4.svg",
    discount: 20,
    discount_price: "6,800₮",
    category: "Хямдралтай",
  },
  {
    name: " Салмон загас",
    price: "11,800₮",
    img: "../image/food/food5.svg",
    discount: 0,
    discount_price: " ",
    category: "Үндсэн хоол",
  },
  {
    name: " Бөөрөнхий мах",
    price: "14,000₮",
    img: "../image/food/food6.svg",
    discount: 0,
    discount_price: " ",
    category: "Үндсэн хоол",
  },
  {
    name: "Самрын нухаш",
    price: "9,800₮",
    img: "../image/food/food7.svg",
    discount: 0,
    discount_price: " ",
    category: "Үндсэн хоол",
  },
  {
    name: " Чикен бургер",
    price: "14,000₮",
    img: "../image/food/food8.svg",
    discount: 0,
    discount_price: " ",
    category: "Үндсэн хоол",
  },
  {
    name: "Детокс салад",
    price: "6,800₮",
    img: "../image/food/food9.svg",
    discount: 0,
    discount_price: " ",
    category: "Салад ба зууш",
  },
  {
    name: "Кобб салад",
    price: "6,800₮",
    img: "../image/food/food10.svg",
    discount: 0,
    discount_price: " ",
    category: "Салад ба зууш",
  },
  {
    name: "Авокадо салад",
    price: "6,800₮",
    img: "../image/food/food11.svg",
    discount: 0,
    discount_price: " ",
    category: "Салад ба зууш",
  },
  {
    name: "Сендвич",
    price: "4,800₮",
    img: "../image/food/food12.svg",
    discount: 0,
    discount_price: " ",
    category: "Салад ба зууш",
  },
  {
    name: "Донатс",
    price: "5,800₮",
    img: "../image/food/food13.svg",
    discount: 0,
    discount_price: " ",
    category: "Амттан",
  },
  {
    name: " Орео дессерт",
    price: "7,800₮",
    img: "../image/food/food14.svg",
    discount: 0,
    discount_price: " ",
    category: "Амттан",
  },
  {
    name: "Вафли",
    price: "5,800₮",
    img: "../image/food/food15.svg",
    discount: 0,
    discount_price: " ",
    category: "Амттан",
  },
  {
    name: "Макарон",
    price: "3,800₮",
    img: "../image/food/food16.svg",
    discount: 0,
    discount_price: " ",
    category: "Амттан",
  },
];
let result = "";

function Menu(props) {
  return (
    <>
      <div className="menu-line d-flex  mb-2">
        <div className="menu-title "></div>
        <div className="d-flex menu-info w-100 justify-content-between">
          <div>
            <span className="menuTitle">{props.menuTitle}</span>
          </div>
          <img src={Arrow} alt className="d-lg-none arrow-2" />
        </div>
        <div></div>
        <div className="d-flex see-more">
          <a href="/" className="d-flex">
            <span className="ms-3 d-none d-lg-inline"> Бүгдийг харах </span>
          </a>
          {/* <img src="../image/right-arrow.svg" alt className="arrow" /> */}
        </div>
      </div>
      <div className="row food-menu">
        {foodData
          .filter((food) => food.category == props.menuTitle)
          .map((p, i) => {
            return <Foods data={p} index={i} />;
          })}
      </div>
    </>
  );
}

export default Menu;

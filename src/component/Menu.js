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
    category: "discount",
  },
  {
    name: "Панкейк",
    price: "4,800₮",
    img: "../image/food/food2.svg",
    discount: 20,
    discount_price: "6,800₮",
    category: "discount",
  },
  {
    name: "Өглөөний хоол",
    price: "4,800₮",
    img: "../image/food/food3.svg",
    discount: 20,
    discount_price: "6,800₮",
    category: "discount",
  },
  {
    name: "Банана сендвич",
    price: "4,800₮",
    img: "../image/food/food4.svg",
    discount: 20,
    discount_price: "6,800₮",
    category: "discount",
  },
  {
    name: " Салмон загас",
    price: "11,800₮",
    img: "../image/food/food5.svg",
    discount: 0,
    discount_price: " ",
    category: "main",
  },
  {
    name: " Бөөрөнхий мах",
    price: "14,000₮",
    img: "../image/food/food6.svg",
    discount: 0,
    discount_price: " ",
    category: "main",
  },
  {
    name: "Самрын нухаш",
    price: "9,800₮",
    img: "../image/food/food7.svg",
    discount: 0,
    discount_price: " ",
    category: "main",
  },
  {
    name: " Чикен бургер",
    price: "14,000₮",
    img: "../image/food/food8.svg",
    discount: 0,
    discount_price: " ",
    category: "main",
  },
  {
    name: "Детокс салад",
    price: "6,800₮",
    img: "../image/food/food9.svg",
    discount: 0,
    discount_price: " ",
    category: "salad",
  },
  {
    name: "Кобб салад",
    price: "6,800₮",
    img: "../image/food/food10.svg",
    discount: 0,
    discount_price: " ",
    category: "salad",
  },
  {
    name: "Авокадо салад",
    price: "6,800₮",
    img: "../image/food/food11.svg",
    discount: 0,
    discount_price: " ",
    category: "salad",
  },
  {
    name: "Сендвич",
    price: "4,800₮",
    img: "../image/food/food12.svg",
    discount: 0,
    discount_price: " ",
    category: "salad",
  },
  {
    name: "Донатс",
    price: "5,800₮",
    img: "../image/food/food13.svg",
    discount: 0,
    discount_price: " ",
    category: "desert",
  },
  {
    name: " Орео дессерт",
    price: "7,800₮",
    img: "../image/food/food14.svg",
    discount: 0,
    discount_price: " ",
    category: "desert",
  },
  {
    name: "Вафли",
    price: "5,800₮",
    img: "../image/food/food15.svg",
    discount: 0,
    discount_price: " ",
    category: "desert",
  },
  {
    name: "Макарон",
    price: "3,800₮",
    img: "../image/food/food16.svg",
    discount: 0,
    discount_price: " ",
    category: "desert",
  },
];
let result = "";

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
      {/* {console.log(foodData[1])} */}
      {foodData.map((p, i) => {
        return <Foods data={p} key={i} />;
      })}
    </>
  );
}

export default Menu;

function Foods(props) {
  //   console.log(props);
  //   console.log(props);
  //   const discountDish = props.data.filter((dish) => dish.category == "discount");
  //   const mainDish = props.data.filter((dish) => dish.category == "main");
  //   const salad = props.data.filter((dish) => dish.category == "salad");
  //   const desert = props.data.filter((dish) => dish.category == "desert");

  return (
    <>
      {" "}
      <>
        <a href="/" class="col-6 pe-2 mb-5 col-md-3">
          <div class="card1">
            <div class="hovver"></div>

            <div class="card">
              <div class="d-flex flex-row-reverse foodPicture">
                <img src={props.data.img} alt="" />
              </div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title d-flex justify-content-start ms-0">
                  {props.data.name}
                </h5>
                <p class="card-text d-flex">
                  <span class="saled">{props.data.price}</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </>
    </>
  );
}
export default Foods;

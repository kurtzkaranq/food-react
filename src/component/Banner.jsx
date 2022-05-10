import "../style/banner.css";
import Banner2 from "../image/banner2.svg";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../image/slider1.svg";

function Main() {
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item className="first-slide d-flex justify-content-center justify-content-md-around">
          <img className="d-block " src={Slider1} alt="First slide" />
          <div className="slide-content">
            <h3 className="slide-title">Mstars Food Delivery</h3>
            <hr />
            <p className="slide-par">Хосгүй амтыг хормын дотор хүргэж өгнө.</p>
          </div>
        </Carousel.Item>
        {/* <Carousel.Item className="d-flex second-slide">
          <img className=" slide2-food" src={Banner2} alt="Second slide" />

          <div>
            <h3 className="slide2-title">Сэт хоол тун удахгүй</h3>
          </div>
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img
            className="d-block "
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <div>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
}

export default Main;

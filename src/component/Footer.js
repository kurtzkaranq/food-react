import "../style/footer.css";
import Logo from "../image/footer/logo.svg";
import Logo1 from "../image/footer/logo1.svg";
import Logo2 from "../image/footer/logo2.svg";
import Logo3 from "../image/footer/logo3.svg";
function Footer() {
  return (
    <footer class="w-fluid mt-4">
      <div class="container-sm p-2">
        <div class="info d-flex flex-column flex-md-row">
          <div class="title d-flex ">
            <img src={Logo} class="logo" alt="" />
            <h2 id="footerTitle" class=" col-12">
              Food Delivery
            </h2>
          </div>
          <div class="d-flex justify-content-between ms-0">
            <div class="footerMenu">
              <ul>
                <li>
                  <a href="#">Нүүр</a>
                </li>
                <li>
                  <a href="#">Хоолны цэс</a>
                </li>
                <li>
                  <a href="./project/deliveryZone.html">Хүргэлтийн бүс</a>
                </li>
              </ul>
            </div>
            <div class="contact">
              <ul>
                <li>
                  <a href="#">Холбоо барих</a>
                </li>
                <li className="number">(976) 123456789</li>
                <li className="number">(976) 987654321</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="justify-content-center d-md-none mSocial">
          <div class="img d-flex ms-2">
            <a href="#" class="ms-2">
              <img src={Logo1} alt="" />
            </a>
            <a href="#" class="ms-2">
              <img src={Logo2} alt="" />
            </a>
            <a href="#" class="ms-2">
              <img src={Logo3} alt="" />
            </a>
          </div>
        </div>
        <hr />
        <div class="bottom d-flex">
          <div class="social d-flex-column d-none d-md-inline">
            Бидэнтэй нэгдээрэй
            <div class="img d-flex ms-2">
              <a href="#" class="ms-2">
                <img src={Logo1} alt="" />
              </a>
              <a href="#" class="ms-2">
                <img src={Logo2} alt="" />
              </a>
              <a href="#" class="ms-2">
                <img src={Logo3} alt="" />
              </a>
            </div>
          </div>
          <div class="last d-flex flex-column flex-md-row w-100">
            <div class="footer-list d-flex flex-column">
              <a href="#" class="mb-2">
                Нууцлалын бодлого
              </a>
              <a href="#" class="mb-2">
                Үйлчилгээний нөхцөл
              </a>
            </div>
            <div class="copyright">
              © 2020 MStars Foods LLC
              <br />
              <span class="d-none d-md-inline">
                Зохиогчийн эрх хуулиар хамгаалагдсан.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

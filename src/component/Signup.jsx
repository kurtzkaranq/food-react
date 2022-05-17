import "../style/header.css";
function Signup() {
  return (
    <>
      <div>
        <div className="menu-title"></div>
        <h3>Бүртгүүлэх</h3>
        <form action="submit">
          <div>
            Нэр
            <input type="text" placeholder="Нэрээ оруулна уу. " />
          </div>
          <div>
            И-мэйл
            <input type="email" placeholder="И-мэйл хаягаа оруулна уу.  " />
          </div>
          <div>
            Хаяг
            <input type="text" placeholder="Хаягаа оруулна уу. " />
          </div>
          <div>
            Нууц үг
            <input type="password" placeholder="Нууц үгээ оруулна уу. " />
          </div>
          <div>
            Нууц үг давтах
            <input type="password" placeholder="Нууц үгээ давтана уу. " />
          </div>
          <a href="/">
            <input type="radio" name="radio" id="radio" />
            Үйлчилгээний нөхцөл зөвшөөрөх
          </a>
          <button>Бүртгүүлэх </button>
        </form>
      </div>
    </>
  );
}
export default Signup;

import "../style/header.css";
function Login() {
  return (
    <>
      <div className="d-flex">
        <div className="menu-title "></div>
        <h3>НЭВТРЭХ</h3>
      </div>
      <form action="submit">
        <div>
          <div>
            И-мэйл
            <input
              type="email"
              name="email"
              id="email"
              placeholder="И-мэйл хаягаа оруулна уу. "
            />
          </div>
          <div>
            Нууц үг
            <input
              type="password"
              id="pass"
              placeholder="Нууц үгээ оруулна уу. "
            />
          </div>
          <div>
            <a href="/">Нууц үгээ мартсан уу.</a>
          </div>
        </div>
        <div>
          <button>Нэвтрэх</button>
          <a href="/" id="buttonOp">
            эсвэл
          </a>
          <input type="button" value="Бүртгүүлэх" />
        </div>
      </form>
    </>
  );
}
export default Login;

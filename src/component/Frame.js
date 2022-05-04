import "../style/frame.css";
import Frame1 from "../image/frame/frame1.svg";
import Frame2 from "../image/frame/frame2.svg";
import Frame3 from "../image/frame/frame3.svg";

function Frame() {
  return (
    <>
      <ul className="frameList">
        <li>
          <img src={Frame1} alt="" />
          <div className="">
            <span> Шуурхай хүргэлт</span>
            <p>30 минутанд таны гарт.</p>
          </div>
        </li>
        <li>
          <img src={Frame2} alt="" />{" "}
          <div>
            <span> Эрүүл баталгаат орц</span>
            <p>Хамгийн чанартайг танд.</p>
          </div>
        </li>
        <li>
          <img src={Frame3} alt="" />
          <div>
            <span> Өргөн сонголт</span>
            <p>Хамгийн онцгойг танд.</p>
          </div>
        </li>
      </ul>
    </>
  );
}
export default Frame;

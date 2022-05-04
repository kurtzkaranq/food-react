import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Frame from "./component/Frame";
import Menu from "./component/Menu";
const titles = ["Хямдралтай", "Үндсэн хоол", "Салад ба зууш", "Амттан"];

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Frame />
      {titles.map((p, i) => {
        return <Menu menuTitle={p} key={i} />;
      })}
    </div>
  );
}

export default App;

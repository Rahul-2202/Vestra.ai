// import img from './bg.png';
import "./App.css";
import Nav from "./components/nav";
import Content from "./components/contents";
function App() {
  // document.body.style.zoom = "67%";

  return (
    <div className="container">
      <div className="nav-container">
        <Nav />
      </div>
      <div className="content-container">
        <Content />
      </div>
    </div>
  );
}

export default App;

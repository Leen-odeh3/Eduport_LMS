import "../App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./../component/Header/Header";
import Home from "./../component/Home/Home";
import About from "./../component/About/About";
// import {Routte} from "./Routte"
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<img src="img/error.png" alt="" />} />
      </Routes>
   
    </div>
  );
}

export default App;

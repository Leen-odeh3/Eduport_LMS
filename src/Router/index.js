import "../App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./../component/Home/Home";
import About from "./../component/About/About";
import Layout from "./Layout";
import Contact from './../component/Contact/Contact'
import  Events from './../component/Events/Events'
import Courses from './../component/Courses/Courses'
import Myaccount from "../component/Myaccount/Myaccount";
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/courses" element={<Courses/>} />
          <Route path="/Myaccount" element={<Myaccount/>}/>
          <Route path="*" element={<img src="img/error.png" alt="" />} />
        </Route>
      </Routes>
   
    </div>
  );
}

export default App;

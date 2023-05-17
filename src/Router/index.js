import "../App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./../component/Header/Header";
import Home from './../component/Home/Home'
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/Home" element={<Home/>}/>  
        <Route path="/" element={<Home/>}/> 

        <Route path="*" element={<img src="img/error.png" alt=""/>}/>  
       
       
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element=""></Route>
        <Route path="/" element="">
          {" "}
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

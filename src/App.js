import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
// import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import Mission from "./Components/Mission";
import WrongPath from "./Components/WrongPath";
import History from "./Components/History";
import Company from "./Components/Company";
import Team from "./Components/Team";
import Members from "./Components/Members";
import MemberDetail from "./Components/MemberDetail";
import React from "react";

const LazyAboutUs = React.lazy(() => import("./Components/AboutUs"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/aboutUs"
          element={
            <React.Suspense>
              <LazyAboutUs />
            </React.Suspense>
          }
        />
        <Route path="/mission" element={<Mission />} />
        <Route path="/history" element={<History />}>
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/members" element={<Members />} />
        <Route path="/members/:memberID" element={<MemberDetail />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}

export default App;

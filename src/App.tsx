import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Vendors from "./pages/Vendors/Vendors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/vendors`} element={<Vendors />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

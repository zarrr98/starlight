import React from "react";
import VendorsList from "./components/VendorsList/VendorsList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/vendors`} element={<VendorsList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

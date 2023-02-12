import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Layouts/Footer";
import Footerheader from "./components/Footerheader";
import Index from "./components/home/index";
import Customnav from "./components/Layouts/Navbar";
import Intenship from "../src/screens/Intenship/index";
import Corporate from "../src/screens/corporate-events/index";
import Career from "./screens/Career/index";
const RouteManager = () => {
  return (
    <BrowserRouter>
      <Customnav />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/intenship" element={<Intenship />}></Route>
        <Route path="/corporate-events" element={<Corporate />}></Route>
        <Route path="/Career" element={<Career />}></Route>
      </Routes>
      <Footer />
      <Footerheader />
    </BrowserRouter>
  );
};

const App = () => {
  return <RouteManager />;
};

export default App;

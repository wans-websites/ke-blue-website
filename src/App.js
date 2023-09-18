import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Products from "./pages/products/Products";
import Contacts from "./pages/contacts/Contacts";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    window.innerWidth < 992 ? setIsMobileView(true) : setIsMobileView(false);
    window.addEventListener("resize", () => {
      window.innerWidth < 992 ? setIsMobileView(true) : setIsMobileView(false);
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header isMobileView={isMobileView} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact.jsx";
import PageProduct from "../pages/pageproduct/PageProduct.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/product/:id" element={<PageProduct />} />
      <Route path="*" element={<h1>Pagina no encontrada...</h1>} />
    </Routes>
  );
};

export default AppRoutes;

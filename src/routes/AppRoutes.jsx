import { Routes, Route } from "react-router";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact.jsx";
import PageProduct from "../pages/pageProduct/PageProduct.jsx";
import { ProductProvider } from "../context/ProductContext.jsx";
import PageCart from "../pages/pageCart/PageCart.jsx";

const AppRoutes = () => {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/product/:id" element={<PageProduct />} />
        <Route path="/cart" element={<PageCart />} />
        <Route path="*" element={<h1>Pagina no encontrada...</h1>} />
      </Routes>
    </ProductProvider>
  );
};

export default AppRoutes;

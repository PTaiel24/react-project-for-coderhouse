import { Routes, Route } from "react-router";
import { OrderProvider } from "../context/OrderContext.jsx";
import Home from "../pages/home/Home";
import AboutContact from "../pages/about&contact/AboutContact.jsx";
import PageCart from "../pages/pageCart/PageCart.jsx";
import PurchaseForm from "../components/purchaseForm/PurchaseForm.jsx";
import PaymentForm from "../components/paymentForm/PaymentForm.jsx";
import ItemDetailContainer from "../components/itemDetailContainer/ItemDetailContainer.jsx";

const AppRoutes = () => {
  return (
    <OrderProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Home />} />
        <Route path="/about&contact" element={<AboutContact />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<PageCart />} />
        <Route path="/cart/purchase-form" element={<PurchaseForm />} />
        <Route path="/cart/payment-form" element={<PaymentForm />} />
        <Route path="*" element={<h1>Página no encontrada...</h1>} />
      </Routes>
    </OrderProvider>
  );
};

export default AppRoutes;

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";

import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <CartProvider>
        <Header />

        <main>
          <AppRoutes />
        </main>

        <Footer />
      </CartProvider>
    </>
  );
};

export default App;

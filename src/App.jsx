import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import styles from "./App.module.css";

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Header />

        <main className={styles.main}>
          <AppRoutes />
        </main>

        <Footer />
      </CartProvider>
    </ProductProvider>
  );
};

export default App;

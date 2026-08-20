import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </>
  );
};

export default App;

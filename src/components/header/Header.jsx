import { useContext } from "react";
import { NavLink, useLocation } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import styles from "./Header.module.css";
import CartWidget from "../cartWidget/CartWidget";

const Header = () => {
  const { products } = useContext(ProductContext);
  const location = useLocation();

  const categories = [
    ...new Set(products.map((product) => product.category).filter(Boolean)),
  ];

  const showCategories =
    location.pathname !== "/cart" &&
    !location.pathname.startsWith("/cart/") &&
    location.pathname !== "/about&contact";

  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <NavLink to="/" end className={styles.logo}>
          SHOP
        </NavLink>

        <div className={styles.mainLinks}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Productos
          </NavLink>

          <NavLink
            to="/about&contact"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Nosotros
          </NavLink>

          <NavLink to="/cart" className={styles.cartLink} aria-label="Ver carrito">
            <CartWidget />
          </NavLink>
        </div>
      </nav>

      {showCategories && categories.length > 0 && (
        <nav className={styles.categoryBar} aria-label="Categorías">
          <div className={styles.desktopCategories}>
            {categories.map((category) => (
              <NavLink
                key={category}
                to={`/category/${encodeURIComponent(category)}`}
                className={({ isActive }) =>
                  `${styles.categoryLink} ${isActive ? styles.categoryActive : ""}`
                }
              >
                {category}
              </NavLink>
            ))}
          </div>

          <details className={styles.mobileMenu}>
            <summary>Explorar categorías</summary>
            <div className={styles.mobileMenuList}>
              {categories.map((category) => (
                <NavLink
                  key={category}
                  to={`/category/${encodeURIComponent(category)}`}
                  className={styles.mobileMenuLink}
                >
                  {category}
                </NavLink>
              ))}
              <NavLink to="/about&contact" className={styles.mobileMenuLink}>
                Nosotros
              </NavLink>
            </div>
          </details>
        </nav>
      )}
    </header>
  );
};

export default Header;

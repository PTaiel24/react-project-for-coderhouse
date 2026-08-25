import { NavLink } from "react-router";
import styles from "./Header.module.css";
import CartWidget from "../cartWidget/CartWidget";

const Header = () => {
  return (
    <header>
      <nav className={styles.header_navlink}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">
          <CartWidget />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

import { NavLink } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.header_navlink}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;

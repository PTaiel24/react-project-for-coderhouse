import styles from "./Footer.module.css";

// Import de logos redes
import Whatsapp from "../../assets/logos-redes/whatsapp.webp";
import Instagram from "../../assets/logos-redes/instagram.webp";
import Facebook from "../../assets/logos-redes/facebook.webp";
import X from "../../assets/logos-redes/x.webp";
import Discord from "../../assets/logos-redes/discord.webp";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.rrss}>
          <li>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Whatsapp}
                alt="Logo de la red social Whatsapp"
                className={styles.logo_rrss}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Instagram}
                alt="Logo de la red social Instagram"
                className={styles.logo_rrss}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Facebook}
                alt="Logo de la red social Facebook"
                className={styles.logo_rrss}
              />
            </a>
          </li>
          <li>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              <img
                src={X}
                alt="Logo de la red social X"
                className={styles.logo_rrss}
              />
            </a>
          </li>
          <li>
            <a href="https://discord.com/" target="_blank" rel="noreferrer">
              <img
                src={Discord}
                alt="Logo de la red social Discord"
                className={styles.logo_rrss}
              />
            </a>
          </li>
        </ul>
      </nav>

      <section className={styles.sectionFooter}>
        <ul>
          <li>
            <Link to={"/about&contact"}>About & Contact</Link>
          </li>
          <li>
            <a
              href="https://github.com/PTaiel24"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>

        <p>© 2026 My Coderhouse Project. Todos los derechos reservados.</p>
      </section>
    </footer>
  );
};

export default Footer;

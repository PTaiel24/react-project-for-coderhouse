import styles from "./Footer.module.css";

// Import de logos redes
import Whatsapp from "../../assets/logos-redes/whatsapp.webp";
import Instagram from "../../assets/logos-redes/instagram.webp";
import Facebook from "../../assets/logos-redes/facebook.webp";
import X from "../../assets/logos-redes/x.webp";
import Discord from "../../assets/logos-redes/discord.webp";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className={styles.rrss}>
          <li>
            <a href="" target="_blank">
              <img
                src={Whatsapp}
                alt="Logo de la red social Whatsapp"
                className={styles.logo_rrss}
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img
                src={Instagram}
                alt="Logo de la red social Instagram"
                className={styles.logo_rrss}
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img
                src={Facebook}
                alt="Logo de la red social Facebook"
                className={styles.logo_rrss}
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img
                src={X}
                alt="Logo de la red social X"
                className={styles.logo_rrss}
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
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
            <a href="./pages/contacto.html">About & Contact</a>
          </li>
          <li>
            <a href="https://github.com/PTaiel24" target="_blank">
              Github
            </a>
          </li>
        </ul>

        <p>© 2026 My Gaming Website. Todos los derechos reservados.</p>

        <a href="#top">
          <img
            src="./assets/img/logos/logo_principal.webp"
            alt="Logo de Mis Juegos que enlaza al inicio"
            className="img_footer"
          />
        </a>
      </section>
    </footer>
  );
};

export default Footer;

import styles from "./AboutContact.module.css";

const AboutContact = () => {
  return (
    <section className={styles.page}>
      <article className={styles.card}>
        <span className={styles.tag}>Sobre la tienda</span>
        <h1>Nosotros</h1>
        <p>
          Somos una tienda online creada como proyecto para practicar React,
          navegación, manejo de estado y conexión con Firebase.
        </p>
      </article>

      <article className={styles.card}>
        <span className={styles.tag}>Contacto</span>
        <h2>¿Necesitás ayuda?</h2>
        <p>
          Podés utilizar los canales disponibles en el pie de página para
          comunicarte con nosotros.
        </p>
      </article>
    </section>
  );
};

export default AboutContact;

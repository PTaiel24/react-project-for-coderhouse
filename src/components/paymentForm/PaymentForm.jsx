import { useContext, useState } from "react";
import styles from "./PaymentForm.module.css";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router";
import { OrderContext } from "../../context/OrderContext";
import { CreateSells } from "../../services/FetchProducts";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const navigate = useNavigate();
  const { cart, vaciarCarrito } = useContext(CartContext);
  const { newOrder } = useContext(OrderContext);

  const [payment, setPayment] = useState({
    name: "",
    card: "",
    date: "",
    cvv: "",
  });
  const [isFlipped, setIsFlipped] = useState(false);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = parseFloat(
    cart
      .reduce((acc, item) => {
        if (item.inSale.offer) {
          const priceOffer =
            item.price - item.price * (item.inSale.discountPercentage / 100);
          return acc + priceOffer * item.quantity;
        }
        return acc + item.price * item.quantity;
      }, 0)
      .toFixed(2),
  );

  const evaluarPrice = (item) => {
    if (item.inSale.offer) {
      return parseFloat(
        (
          item.price -
          item.price * (item.inSale.discountPercentage / 100)
        ).toFixed(2),
      );
    }
    return parseFloat(item.price.toFixed(2));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nuevoValor = name === "cvv" ? value.replace(/\D/g, "") : value;
    setPayment({ ...payment, [name]: nuevoValor });
  };

  const formularioValido =
    payment.name.trim().length > 5 &&
    payment.card.length === 19 &&
    payment.date.length === 5 &&
    payment.cvv.length === 3;

  const finalizarCompra = () => {
    if (!formularioValido) return;

    CreateSells(newOrder)
      .then((res) => {
        const detalleCompra = cart
          .map(
            (item) => `
              <li>
                <strong>${item.title}</strong><br>
                ${item.quantity} x $${evaluarPrice(item)}
              </li>
            `,
          )
          .join("");

        setTimeout(() => {
          vaciarCarrito();
          Swal.fire({
            title: "Compra Exitosa",
            html: `<div>
              <p>Gracias por su compra.</p>
              <p>Estado de la compra:<br>${res.status}</p>
              <p><strong>N° de compra:</strong><br>${res.id}</p>
              <hr>
              <h3>Detalle de la compra</h3>
              <ul style="text-align: left; padding-left: 10px;">${detalleCompra}</ul>
              <hr>
              <p><strong>Cantidad de productos:</strong> ${totalQuantity}</p>
              <p><strong>Total a pagar:</strong> $${totalPrice.toFixed(2)}</p>
            </div>`,
            icon: "success",
            draggable: true,
            confirmButtonText: "OK",
            timer: 20000,
            timerProgressBar: true,
          }).then(() => navigate("/"));
        }, 1500);
      })
      .catch((err) => console.error(err));
  };

  const numeroTarjeta = payment.card || "0000 0000 0000 0000";
  const nombreTitular = payment.name || "NOMBRE APELLIDO";
  const fecha = payment.date || "MM/YY";
  const codigo = payment.cvv || "000";

  return (
    <section className={styles.page}>
      <h1 className={styles.pageTitle}>Método de pago</h1>

      <section className={styles.paymentLayout}>
        <article className={styles.formCard}>
          <article
            className={`${styles.cardPreview} ${isFlipped ? styles.flipped : ""}`}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFace + " " + styles.cardFront}>
                <div className={styles.cardBrand}></div>
                <div className={styles.cardNumber}>{numeroTarjeta}</div>
                <div className={styles.cardData}>
                  <p>{nombreTitular}</p>
                  <p>{fecha}</p>
                </div>
              </div>

              <div className={styles.cardFace + " " + styles.cardBack}>
                <div className={styles.cardStripe}></div>
                <div className={styles.cardCvv}>CVV&nbsp;&nbsp;{codigo}</div>
              </div>
            </div>
          </article>

          <form className={styles.paymentForm}>
            <label className={styles.field}>
              Nombre del titular
              <input
                className={styles.input}
                type="text"
                name="name"
                value={payment.name}
                onChange={handleChange}
                placeholder="Ej: Steve"
                autoComplete="cc-name"
              />
            </label>

            <label className={styles.field}>
              Número de tarjeta
              <input
                className={styles.input}
                type="text"
                name="card"
                value={payment.card}
                onChange={handleChange}
                placeholder="0000 0000 0000 0000"
                maxLength="19"
                autoComplete="cc-number"
              />
            </label>

            <div className={styles.row}>
              <label className={styles.field}>
                Fecha
                <input
                  className={styles.input}
                  type="text"
                  name="date"
                  value={payment.date}
                  onChange={handleChange}
                  placeholder="05/29"
                  maxLength="5"
                  autoComplete="cc-exp"
                />
              </label>

              <label className={styles.field}>
                CVV
                <input
                  className={styles.input}
                  type="text"
                  name="cvv"
                  value={payment.cvv}
                  onFocus={() => setIsFlipped(true)}
                  onChange={(event) => {
                    handleChange(event);
                    setIsFlipped(true);
                  }}
                  placeholder="111"
                  maxLength="3"
                  autoComplete="cc-csc"
                />
              </label>
            </div>
          </form>
        </article>

        <aside className={styles.asideCompra}>
          <h2 className={styles.asideTitle}>Resumen de compra</h2>
          <section className={styles.resumenCompra}>
            <h3>Cantidad de productos: {totalQuantity}</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.title}: ${evaluarPrice(item)} x {item.quantity}
                </li>
              ))}
            </ul>

            <h4 className={styles.total}>
              Total a pagar: ${totalPrice.toFixed(2)}
            </h4>

            <button
              className={styles.finishButton}
              type="button"
              disabled={!formularioValido}
              onClick={finalizarCompra}
            >
              Finalizar Compra
            </button>
          </section>
        </aside>
      </section>
    </section>
  );
};

export default PaymentForm;

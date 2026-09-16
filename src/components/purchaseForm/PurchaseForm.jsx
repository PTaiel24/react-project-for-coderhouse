import { useContext, useState } from "react";
import styles from "./PurchaseForm.module.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";
import { OrderContext } from "../../context/OrderContext";

const PurchaseForm = () => {
  const { crearPedido } = useContext(OrderContext);
  const { cart } = useContext(CartContext);
  const [formularioValido, setFormularioValido] = useState(false);

  const [buyer, setBuyer] = useState({
    name: "",
    lastname: "",
    numberTel: "",
    email: "",
    direction: {
      nationality: "",
      locality: "",
      zipCode: "",
      street: "",
      numberStreet: "",
    },
  });

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
      const price =
        item.price - item.price * (item.inSale.discountPercentage / 100);
      return parseFloat(price.toFixed(2));
    }
    return parseFloat(item.price.toFixed(2));
  };

  const validarBuyer = (data) =>
    data.name.trim() !== "" &&
    data.lastname.trim() !== "" &&
    data.numberTel.trim() !== "" &&
    data.email.trim() !== "" &&
    data.direction.nationality !== "" &&
    data.direction.locality.trim() !== "" &&
    data.direction.zipCode.trim() !== "" &&
    data.direction.street.trim() !== "" &&
    data.direction.numberStreet.trim() !== "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    const keys = name.split(".");

    const nuevoBuyer =
      keys.length === 1
        ? { ...buyer, [keys[0]]: value }
        : {
            ...buyer,
            [keys[0]]: {
              ...buyer[keys[0]],
              [keys[1]]: value,
            },
          };

    setBuyer(nuevoBuyer);
    setFormularioValido(validarBuyer(nuevoBuyer));
  };

  return (
    <section className={styles.page}>
      <h1 className={styles.pageTitle}>Datos de compra</h1>

      <section className={styles.layout}>
        <article className={styles.formCard}>
          <form className={styles.form}>
            <fieldset className={styles.fieldset}>
              <legend>Datos personales</legend>

              <label className={styles.field}>
                Nombre
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={buyer.name}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.field}>
                Apellido
                <input
                  className={styles.input}
                  type="text"
                  name="lastname"
                  placeholder="Apellido"
                  value={buyer.lastname}
                  onChange={handleChange}
                />
              </label>
            </fieldset>

            <label className={styles.field}>
              Correo electrónico
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="steve@gmail.com"
                value={buyer.email}
                onChange={handleChange}
              />
            </label>

            <label className={styles.field}>
              Número de teléfono
              <input
                className={styles.input}
                type="number"
                name="numberTel"
                placeholder="1123456789"
                maxLength={10}
                value={buyer.numberTel}
                onChange={handleChange}
              />
            </label>

            <fieldset className={styles.form}>
              <legend>Dirección</legend>

              <label className={styles.field}>
                Nacionalidad
                <select
                  className={styles.select}
                  name="direction.nationality"
                  value={buyer.direction.nationality}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar nacionalidad</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Estados Unidos">Estados Unidos</option>
                  <option value="España">España</option>
                  <option value="China">China</option>
                </select>
              </label>

              <label className={styles.field}>
                Localidad
                <input
                  className={styles.input}
                  type="text"
                  name="direction.locality"
                  placeholder="Buenos Aires"
                  value={buyer.direction.locality}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.field}>
                Código postal
                <input
                  className={styles.input}
                  type="tel"
                  name="direction.zipCode"
                  placeholder="1234"
                  maxLength={4}
                  value={buyer.direction.zipCode}
                  onChange={handleChange}
                />
              </label>

              <fieldset className={styles.addressFields}>
                <label className={styles.field}>
                  Calle
                  <input
                    className={styles.input}
                    type="text"
                    name="direction.street"
                    placeholder="9 de Julio"
                    value={buyer.direction.street}
                    onChange={handleChange}
                  />
                </label>

                <label className={styles.field}>
                  Número
                  <input
                    className={styles.input}
                    type="tel"
                    name="direction.numberStreet"
                    placeholder="123"
                    value={buyer.direction.numberStreet}
                    onChange={handleChange}
                  />
                </label>
              </fieldset>
            </fieldset>
          </form>
        </article>

        <aside className={styles.asideCompra}>
          <h2 className={styles.asideTitle}>Resumen de compra</h2>
          <section className={styles.resumenCompra}>
            <h3>
              Productos: {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </h3>

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

            {formularioValido ? (
              <Link to="/cart/payment-form">
                <button
                  type="button"
                  className={styles.payButton}
                  onClick={() => crearPedido({ buyer, cart, totalPrice })}
                >
                  Continuar al pago
                </button>
              </Link>
            ) : (
              <button type="button" className={styles.payButton} disabled>
                Continuar al pago
              </button>
            )}
          </section>
        </aside>
      </section>
    </section>
  );
};

export default PurchaseForm;

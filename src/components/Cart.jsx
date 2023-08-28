import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  const order = {
    buyer: {
      name: "Pablo",
      email: "pablo44♠@gmail.com",
      phone: "123123",
    },
    items: cart.map((product) => ({
      id: product.id || "",
      title: product.title || "",
      price: product.price || 0,
      quantity: product.quantity || 0,
    })),
    total: totalPrice(),
  };
  const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => console.log(id));
  };

  if (cart.length === 0) {
    return (
      <>
        <p>Tu carrito está vacío.</p>
        <Link to="/">Volver a la tienda</Link>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total:{totalPrice()}</p>
      <button onClick={handleClick}>Emitir Compra</button>
    </>
  );
};
export default Cart;

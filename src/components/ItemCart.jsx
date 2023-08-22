import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ product }) => {
  const { removeCart, totalProduct } = useCartContext();
  const { id, text, price, img, newQuantity } = product[0];

  return (
    <>
      <img src={img} alt="" />
      <div>
        <p>Titulo:{text}</p>
        <p>precio:{price}</p>
        <p>Cantidad:{newQuantity}</p>
        <p>Subtotal: ${price * newQuantity}</p>

        <button
          onClick={() => {
            removeCart(id);
          }}
        >
          Eliminar
        </button>
      </div>
    </>
  );
};

export default ItemCart;

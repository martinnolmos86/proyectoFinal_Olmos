import React from "react";
import { Link } from "react-router-dom";
const PurchaseSuccess = ({ orderId }) => {
  return (
    <>
      {" "}
      <h2>Compra Exitosa</h2>
      <p>Número de Orden: {orderId}</p>
      <Link to="/">Volver al Menú Principal</Link>
    </>
  );
};

export default PurchaseSuccess;

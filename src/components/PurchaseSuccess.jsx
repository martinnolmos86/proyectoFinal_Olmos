import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PurchaseSuccess = ({ orderId }) => {
  return (
    <>
      {" "}
      <Style>
        <h2>¡Compra Exitosa!</h2>
        <p>Número de Orden: {orderId}</p>
        <Link className="link" to="/">
          Volver al Menú Principal
        </Link>
      </Style>
    </>
  );
};
const Style = styled.div`
  font-family: "Poppins", sans-serif;
  margin-top: 40px;
  .link {
    text-decoration: none;
    color: #e8a138;
  }
`;

export default PurchaseSuccess;

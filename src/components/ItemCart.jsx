import React from "react";
import { useCartContext } from "../context/CartContext";
import styled from "styled-components";

const ItemCart = ({ product }) => {
  const { removeCart } = useCartContext();
  const { id, text, price, img, newQuantity } = product;
  const handleClick = () => {
    removeCart(id);
  };
  return (
    <>
      <Styled>
        <div className="container">
          <img src={img} alt="" />
          <p className="text">{text}</p>
          <p>{price}</p>
          <p>{newQuantity}</p>
          <p>{price * newQuantity}</p>

          <p className="remove" onClick={handleClick}>
            X
          </p>
        </div>
      </Styled>{" "}
    </>
  );
};
const Styled = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    font-family: "Poppins", sans-serif;
    img {
      height: 60px;
      width: 90px;
    }
    .text {
      color: #e8a138;
    }
    .remove {
      color: #e8a138;
    }
    .remove:hover {
      cursor: pointer;
    }
  }
`;

export default ItemCart;

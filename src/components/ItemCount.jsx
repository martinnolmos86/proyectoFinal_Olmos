import React, { useState } from "react";
import styled from "styled-components";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  function sumar() {
    setCount(count + 1);
  }
  function resta() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <StyledForm>
        <form action="" className="cart">
          <div className="divButton">
            <input type="button" value="-" className="minus" onClick={resta} />
            <input type="button" value={count} className="count" />
            <input type="button" value="+" className="plus" onClick={sumar} />
          </div>
          <button
            type="button"
            className="button "
            onClick={() => onAdd(count)}
          >
            AÑADIR AL CARRITO
          </button>
        </form>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.div`
  .cart {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    height: 81px;
    width: 482px;
    display: flex;

    .divButton input {
      height: 40px;
      width: 40px;
      background-color: transparent;
      border: 0.1em solid #dad6d6;
      outline: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
    }
    .divButton input.minus:hover,
    .divButton input.plus:hover {
      background-color: #ccc; /* Cambiar el color a gris (#ccc) al hacer hover */
    }

    .divButton input:focus {
      outline: none;
    }

    .button {
      background-color: #3d434c;
      color: #ffffff;
      width: 193px;
      height: 43px;
      border-color: #ffffff;
      text-align: center;
      margin: 0;
      cursor: pointer;
      padding: 13px 29px;
      line-height: 17px;
      font-size: 14px;
      font-weight: 400;
      font-style: normal;
      letter-spacing: 0px;
      border-width: 0px;
      border-style: solid;
      border-radius: 0px;
      text-transform: uppercase;
      transition: all 0.2s;
      margin-left: 20px;
    }
  }
`;

export default ItemCount;

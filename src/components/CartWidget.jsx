import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalProduct } = useCartContext();
  return (
    <>
      <StyledCartWidget>
        <div>
          <Link to="/Cart">
            <i className="bi bi-cart3"> </i>
          </Link>
          {totalProduct() > 0 ? <p>{totalProduct()}</p> : null}
        </div>
      </StyledCartWidget>
    </>
  );
};

// STYLES

const StyledCartWidget = styled.div`
  div {
    display: flex;
    align-items: center;
    p {
      color: black;
    }
    a i {
      font-size: 14px;
      color: black;
      padding: 1rem;
    }
    /* MEDIA QUERIS - en tamaño menor a 768px */
    P {
      @media (max-width: 768px) {
        color: #e8a138;
        font-size: 20px;
      }
    }
    a i {
      @media (max-width: 768px) {
        color: #e8a138;
        font-size: 20px;
      }
    }
  }
`;

export default CartWidget;

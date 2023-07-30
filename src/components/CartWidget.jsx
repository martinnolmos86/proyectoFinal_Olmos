import React from "react";
import styled from "styled-components";

const CartWidget = () => {
  return (
    <>
      <StyledCartWidget>
        <div>
          <a href="#">
            <i className="bi bi-cart3"> </i>
          </a>
          <p>2</p>
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

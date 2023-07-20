import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";
import Assets from "../assets/logo-2.png";
import BurguerButton from "./BurguerButton";

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <img src={Assets} alt="Logo" />
        <div className="div-container-a">
          <a href="#">Producto</a>
          <a href="#">Contacto</a>
          <a href="#">Nosotros</a>
          <a href="#">Adopta</a>
        </div>
        <CartWidget />
        <div className="burguer">
          <BurguerButton />
        </div>
      </StyledNav>
    </>
  );
};

export default NavBar;

// STYLES

const StyledNav = styled.nav`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  img {
    height: 100px;
    width: 100px;
    margin-left: 1.5rem;
  }
  .div-container-a {
    a {
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      font-size: 12px;
      color: black;
      padding: 1rem;
      text-decoration: none;
      width: 100%;
    }
  }

  .div-container-a a:hover {
    background-color: orange;
    color: black;
  }
  .burguer {
    @media (min-width: 760px) {
      display: none;
    }
  }
`;

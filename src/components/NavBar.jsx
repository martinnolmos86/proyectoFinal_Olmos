import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";
import Assets from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <img src={Assets} alt="Logo" />
        <div>
          <a href="#">Producto</a>
          <a href="#">Contacto</a>
          <a href="#">Nosotros</a>
          <a href="#">Adopta</a>
        </div>
        <CartWidget />
      </StyledNav>
    </>
  );
};

export default NavBar;

// STYLES

const StyledNav = styled.nav`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  img {
    height: 80px;
    width: 120px;
    margin-left: 1.5rem;
  }
  div {
    a {
      font-family: "Raleway", sans-serif;
      font-size: 12px;
      color: white;
      padding: 1rem;
      text-decoration: none;
    }
  }

  div a:hover {
    background-color: #fff; /* Fondo blanco en el hover */
    color: #333; /* Cambiar el color del texto al pasar el mouse */
  }
`;

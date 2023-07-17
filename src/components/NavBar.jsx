import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <h3>logo</h3>
        <div>
          <a href="#">Producto</a>
          <a href="#">Contacto</a>
          <a href="#">Nosotros</a>
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
  padding: 1.4rem;

  h3 {
    color: white;
  }
  div {
    a {
      color: white;
      padding: 1rem;
      text-decoration: none;
    }
  }
`;

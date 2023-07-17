import React from "react";
import styled from "styled-components";

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
        <div>
          <i className="bi bi-cart3"></i>
          <p>2</p>
        </div>
      </StyledNav>
    </>
  );
};

export default NavBar;

// styles

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
  div {
    display: flex;
    align-items: center;
    p {
      color: white;
      padding: 0.5rem;
    }
    i {
      color: white;
      padding: 0.5rem;
    }
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";
import Assets from "../assets/logo-2.png";
import BurguerButton from "./BurguerButton";

const NavBar = () => {
  const [cliCked, setClicked] = useState(false);
  console.log(cliCked);
  const handleClick = () => {
    // CUANDO ESTA TRUE LO PASA A FALSE Y VICE VERSA

    setClicked(!cliCked);
  };

  return (
    <>
      <StyledNav>
        <img src={Assets} alt="Logo" />
        <div className={`div-container-a ${cliCked ? `active` : ``} `}>
          <a onClick={handleClick} href="#">
            Producto
          </a>
          <a onClick={handleClick} href="#">
            Contacto
          </a>
          <a onClick={handleClick} href="#">
            Nosotros
          </a>
          <a onClick={handleClick} href="#">
            Dona
          </a>
        </div>
        <CartWidget />
        <div className="burguer">
          <BurguerButton cliCked={cliCked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${cliCked ? `active` : ``}`}></BgDiv>
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
  height: 100px;
  padding: 1.2rem;
  img {
    height: 100px;
    width: 100px;
    margin-left: 1.5rem;
  }
  a {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: black;
    padding: 1rem;
    padding-top: 50px;
    padding-bottom: 50px;
    text-decoration: none;
    width: 100%;
  }
  .div-container-a {
    /* puse recien */
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: black;
      font-size: 1.2rem;
      display: block;
    }

    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 12px;
        display: inline;
      }
      display: block;
    }
  }
  /* CUANDO APRETEMOS EL BOTON BURGUER */

  .div-container-a.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      color: white;
    }
  }
  /* hasta aca */
  .div-container-a a:hover {
    background-color: #e8a138;
    color: black;
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  /* background-color: white; */
  z-index: -1;
  top: -700;
  left: -1000;
  width: 100%;
  height: 100%;
  /* background-color: black; */
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 80% 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

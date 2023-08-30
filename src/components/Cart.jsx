import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import styled from "styled-components";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <StyledCart>
          <div className="container-vacio">
            <p>Tu carrito está vacío.</p>
            <Link className="backButton" to="/">
              Volver a la tienda
            </Link>
          </div>{" "}
        </StyledCart>
      </>
    );
  }
  return (
    <>
      <CartStyled>
        <div className="container-complete">
          <div className="tittle">
            <h2>Item In Your Cart</h2>
          </div>
          <hr className="hr" />
          <div className="tittle-product">
            <div className="div-1">
              <p>Producto</p>
            </div>
            <div className="div-3">
              <p>Precio</p>
              <p>Cantidad</p>
              <p>Subtotal</p>
            </div>
          </div>
          <hr className="hr" />

          <div className="container-map">
            {cart.map((product) => (
              <ItemCart key={product.id} product={product} />
            ))}
          </div>
          <div className="container-total">
            <h2>Total del carrito</h2>
            <hr />
            <div className="div-p">
              <p>Total</p>
              <p>{totalPrice()}</p>
            </div>
            <div className="div-btn">
              <Link to="/checkout" className="button">
                Emitir Compra
              </Link>
            </div>
          </div>
        </div>
      </CartStyled>
    </>
  );
};

// ESTILOS CARRITO CON PRODUCTOS
const CartStyled = styled.div`
  .container-complete {
    margin: 0 auto;
    width: 80%;
    .hr {
      margin-top: 30px;
    }
    .tittle-product {
      justify-content: space-between;
      display: flex;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      margin-top: 10px;
      p {
        font-size: 13.4px;
      }
      .div-3 {
        display: flex;
        height: 50%;
        margin-right: 100px;
      }
      .div-3 p {
        margin: 0 60px;
      }
      .div-1 {
        height: 50%;
      }
    }
  }
  .container-map {
    margin-top: 40px;
  }
  .tittle {
    font-family: "Poppins", sans-serif;
    height: 70px;
    h2 {
      font-size: 50px;
      font-weight: 500;
      padding: 20px;
    }
  }
  .container-total {
    width: 50%;
    font-family: "Poppins", sans-serif;
    h2 {
      font-size: 50px;
      font-weight: 500;
    }
    .div-p {
      display: flex;
      justify-content: space-between;
      padding: 20px;
    }
    .div-btn {
      margin-top: 20px;

      .button {
        text-decoration: none;
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
  }
`;

// ESTILOS CARRITO VACIO
const StyledCart = styled.div`
  .container-vacio {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    width: 80%;
    margin: 0 auto;
    font-family: "Poppins", sans-serif;

    p {
      font-size: 18px;
      color: #808080;
      font-weight: 500;
    }
    .backButton {
      text-decoration: none;
      color: #e8a138;
      font-size: 16px;
    }
  }
`;

export default Cart;

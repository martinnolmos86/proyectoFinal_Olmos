import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ animals }) => {
  if (animals.length === 0) {
    return <div>Cargando...</div>;
  }

  const [quantityAdd, setQuantityAdd] = useState("");
  const { addProduct } = useCartContext();

  const onAdd = (cantidad) => {
    setQuantityAdd(cantidad);
    if (typeof animals === "object" && animals !== null) {
      addProduct(animals, cantidad);
    } else {
      console.error("data no es un objeto válido o es nulo");
    }
  };

  useEffect(() => {}, [quantityAdd]);

  const { text, price, img } = animals;
  return (
    <>
      <StyledContainer>
        <div className="page-container">
          <div className="container">
            <div className="div-img">
              <img src={img} alt="" />
            </div>
            <div className="container-text">
              <div>
                <h3>{text}</h3>
              </div>

              <div>
                <bdi>$ {price}</bdi>
              </div>
              <hr />
              <div className="container-itemcount">
                {quantityAdd === "" ? (
                  <ItemCount onAdd={onAdd} />
                ) : (
                  <div>
                    <Link to="/Cart" className="toCart">
                      {" "}
                      Ir al carrito
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </StyledContainer>
    </>
  );
};

// STYLES

const StyledContainer = styled.div`
  .page-container {
    display: flex;

    justify-content: center;
    .container {
      display: flex;
      margin-top: 80px;
      max-width: 1100px;
      width: 100%;
      box-sizing: border-box;
      .container-itemcount {
        margin-top: 50px;
        .toCart {
          color: #e8a138;
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          text-decoration: none;
        }
      }
      hr {
        margin-top: 40px;
      }
      .div-img {
        img {
          width: 500px;
          height: 333px;
        }
      }
      .container-text {
        font-family: "Poppins", sans-serif;
        margin-left: 20px;
        color: #e8a138;

        h3 {
          font-style: italic;
          font-size: 26px;
          font-weight: 500;
        }
        bdi {
          margin-top: 25px;
          font-size: 16px;
        }
      }
    }
  }
`;

export default ItemDetail;

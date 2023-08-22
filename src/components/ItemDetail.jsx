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
    console.log(`Donaste ${cantidad}`);
    setQuantityAdd(cantidad);
    if (typeof animals === "object" && animals !== null) {
      console.log("data es un objeto válido:", animals);
      addProduct(animals, cantidad); // El valor de data es un objeto válido
      // Puedes realizar operaciones con el objeto data aquí
    } else {
      console.error("data no es un objeto válido o es nulo");
      // El valor de data no es un objeto válido o es nulo
      // Puedes manejar este caso de manera adecuada, como mostrar un mensaje de error
    }
  };

  useEffect(() => {
    console.log("ItemDetail se actualizó"); // Verifica si el componente se actualiza
  }, [quantityAdd]);

  const { text, price, img } = animals[0];
  return (
    <>
      <StyledContainer>
        <div className="page-container">
          <div className="container">
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <h3>{text}</h3>
              <bdi>$ {price}</bdi>
              {quantityAdd === "" ? (
                <ItemCount onAdd={onAdd} />
              ) : (
                <div>
                  <Link to="/Cart"> Ir al carrito</Link>
                </div>
              )}
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

      max-width: 1100px;
      width: 100%;
      box-sizing: border-box;
      img {
        width: 500px;
        height: 333px;
      }
      h3 {
        color: #e8a138;
        font-style: italic;
      }
      bdi {
        color: #e8a138;
      }
    }
  }
`;

export default ItemDetail;

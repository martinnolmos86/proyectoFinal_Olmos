import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ItemList = ({ animals = [] }) => {
  return (
    <>
      <StylesProps>
        <div className="page-container">
          <div className="content-container">
            <h1>Donación única</h1>
            <p>
              Tu apoyo es muy importante para seguir brindando segundas
              oportunidades. Si tienes preguntas o quieres información
              adicional, puedes escribirnos a nuestra línea de whatsapp (57)
              3213007486
            </p>
          </div>
        </div>
      </StylesProps>
      <div>
        {animals.map((animal) => (
          <Item key={animal.id} info={animal} />
        ))}
      </div>
    </>
  );
};

// STYLES
const StylesProps = styled.p`
  .page-container {
    display: flex;
    justify-content: center;
  }
  .content-container {
    max-width: 1100px;
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    text-align: start;
    font-family: "Poppins", sans-serif;
  }

  h1 {
    /* FUNCION CLAMP TAMAÑO MINIMO , PREFERIDO Y MAXIMO */
    font-size: clamp(3.5rem, 5vw, 70px);
    font-weight: 700;
  }
  p {
    /* FUNCION CLAMP TAMAÑO MINIMO , PREFERIDO Y MAXIMO */

    font-size: clamp(16px, 1em, 16px);
    color: #464646;
  }
  @media (max-width: 1200px) {
    .content-container {
      max-width: 90%; /* Ajusta el ancho máximo a un porcentaje menor */
    }
  }
  /* p {
      color: #333;
      font-size: 30px;
      font-weight: bold;
      padding: 10px;
    } */
`;
export default ItemList;

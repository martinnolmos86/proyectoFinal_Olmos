import React from "react";
import styled from "styled-components";

const ItemDetail = ({ animals }) => {
  if (animals.length === 0) {
    return <div>Cargando...</div>;
  }

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

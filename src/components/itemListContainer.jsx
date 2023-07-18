import React from "react";
import styled from "styled-components";

const ItemListContainer = ({ gretting }) => {
  return (
    <>
      <StylesProps>
        <div>
          <p>!!{gretting}!!</p>
        </div>
      </StylesProps>
    </>
  );
};
// STYLES
const StylesProps = styled.p`
  div {
    display: flex;
    justify-content: center;
    border: 1px solid #333;
    padding: 10px;
    p {
      color: #333;
      font-size: 30px;
      font-weight: bold;
      padding: 10px;
    }
  }
`;

export default ItemListContainer;

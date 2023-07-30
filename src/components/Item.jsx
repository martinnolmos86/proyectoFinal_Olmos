import React from "react";
import styled from "styled-components";
import Assets from "../assets/Dona-1.jpg";

const Item = ({ info }) => {
  return (
    <>
      <StylesItem>
        <div className="container">
          <img src={info.img} alt="" />
          <div className="container_p">
            <h3>
              QUIERO
              <br /> DONAR
            </h3>
            <bdi>$ 300</bdi>
          </div>
        </div>
      </StylesItem>
    </>
  );
};

const StylesItem = styled.div`
  .container {
    width: 264.5px;
    height: 333.56px;
    border: 12px;
    text-align: center;
    img {
      height: 162px;
      width: 244px;
    }
    .container_p {
      text-align: center;
      h3 {
        font-size: 34px;
        font-family: "Poppins", sans-serif;
        text-decoration: none;
        color: #e8a138;
      }
      bdi {
        font-size: 18px;
        font-family: "Poppins", sans-serif;
        color: #e8a138;
      }
    }
  }
`;

export default Item;

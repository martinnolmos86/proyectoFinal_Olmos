import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const animals = [
  {
    id: 1,
    text: "Quiero Donar",
    price: 50,
    img: "/assets/Dona-1.jpg",
  },
  {
    id: 2,
    text: "Quiero Donar",
    price: 100,
    img: "/assets/Donar-2.jpg",
  },
  {
    id: 3,
    text: "Quiero Donar",
    price: 200,
    img: "/assets/Donar-3.jpg",
  },
  {
    id: 4,
    text: "Quiero Donar",
    price: 500,
    img: "/assets/Donar-4.jpg",
  },
  { id: 5, text: "Quiero Donar", price: 750, img: "/assets/dona5.jpg" },
  {
    id: 6,
    text: "Quiero Donar",
    price: 1000,
    img: "/assets/dona6.jpg",
  },
  {
    id: 7,
    text: "Quiero Donar",
    price: 1500,
    img: "/assets/dona7.jpg",
  },
  {
    id: 8,
    text: "Quiero Donar",
    price: 2000,
    img: "/assets/dona8.jpg",
  },
];

// CREO UNA CONSTANTE SIMULANDO UNA LLAMADA A UNA API CON UNA NUEVA INSTANCIA PROMISE

const getAnimals = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (animals.length > 0) {
        resolve(animals);
      } else {
        reject("No se encontro animals");
      }
    }, 1000);
  });
};

const ItemListContainer = () => {
  const [animalData, setAnimalData] = useState([]);

  useEffect(() => {
    getAnimals()
      .then((result) => {
        setAnimalData(result);
      })
      // El CATCH ESTA DE MAS PERO LO COLOCAMOS IGUAL,
      // POR QUE ESTAMOS HACIENDO LA PETICION A UN ARRAY DENTRO DEL COMPONENTE
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <ItemList animals={animalData} />
    </>
  );
};

export default ItemListContainer;

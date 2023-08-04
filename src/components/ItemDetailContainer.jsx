import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const animals = [
  {
    id: 1,
    text: "Quiero Donar",
    price: 50,
    img: "/assets/Dona-1.jpg",
  },
];

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

const ItemDetailContainer = () => {
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
      <ItemDetail animals={animalData} />
    </>
  );
};

export default ItemDetailContainer;

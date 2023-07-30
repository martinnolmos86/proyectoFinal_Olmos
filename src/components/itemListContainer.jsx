import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const animals = [
  { id: 1, text: "Quiero Donar", price: 50, img: "./assets/Dona-1.jpg" },
  { id: 2, text: "Quiero Donar", price: 100, img: "./assets/Donar-2.jpg" },
  { id: 3, text: "Quiero Donar", price: 200, img: "./assets/Donar-3.jpg" },
  { id: 4, text: "Quiero Donar", price: 500, img: "./assets/Donar-4.jpg" },
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
    }, 2000);
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
  console.log("Props en ItemListContainer:", animalData);
  return (
    <>
      <ItemList animals={animalData} />
    </>
  );
};

export default ItemListContainer;

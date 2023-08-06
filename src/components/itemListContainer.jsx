import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const animals = [
  {
    id: 1,
    text: "Quiero Donar",
    price: 50,
    img: "/assets/Dona-1.jpg",
    category: "minimo",
  },
  {
    id: 2,
    text: "Quiero Donar",
    price: 100,
    img: "/assets/Donar-2.jpg",
    category: "minimo",
  },
  {
    id: 3,
    text: "Quiero Donar",
    price: 200,
    img: "/assets/Donar-3.jpg",
    category: "minimo",
  },
  {
    id: 4,
    text: "Quiero Donar",
    price: 500,
    img: "/assets/Donar-4.jpg",
    category: "minimo",
  },
  {
    id: 5,
    text: "Quiero Donar",
    price: 750,
    img: "/assets/dona5.jpg",
    category: "maximo",
  },
  {
    id: 6,
    text: "Quiero Donar",
    price: 1000,
    img: "/assets/dona6.jpg",
    category: "maximo",
  },
  {
    id: 7,
    text: "Quiero Donar",
    price: 1500,
    img: "/assets/dona7.jpg",
    category: "maximo",
  },
  {
    id: 8,
    text: "Quiero Donar",
    price: 2000,
    img: "/assets/dona8.jpg",
    category: "maximo",
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
    }, 500);
  });
};

const ItemListContainer = () => {
  const [animalData, setAnimalData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    //   getAnimals()
    //     .then((result) => {
    //       setAnimalData(result);
    //     })
    //     // El CATCH ESTA DE MAS PERO LO COLOCAMOS IGUAL,
    //     // POR QUE ESTAMOS HACIENDO LA PETICION A UN ARRAY DENTRO DEL COMPONENTE
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    //   if (categoriaId) {
    //     getAnimals().then((res) =>
    //       setAnimalData(res.filter((minimo) => minimo.category === categoriaId))
    //     );
    //   } else {
    //     getAnimals().then((res) => setAnimalData(res));
    //   }
    // }, [categoriaId]);
    const fetchData = async () => {
      try {
        const res = await getAnimals();
        if (categoriaId) {
          setAnimalData(res.filter((dona) => dona.category === categoriaId));
        } else {
          setAnimalData(res);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [categoriaId]);

  return (
    <>
      <ItemList animals={animalData} />
    </>
  );
};

export default ItemListContainer;

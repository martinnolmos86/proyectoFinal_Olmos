import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// const animals = [
//   {
//     id: 1,
//     text: "Quiero Donar",
//     price: 50,
//     img: "/assets/Dona-1.jpg",
//     category: "minimo",
//   },
//   {
//     id: 2,
//     text: "Quiero Donar",
//     price: 100,
//     img: "/assets/Donar-2.jpg",
//     category: "minimo",
//   },
//   {
//     id: 3,
//     text: "Quiero Donar",
//     price: 200,
//     img: "/assets/Donar-3.jpg",
//     category: "minimo",
//   },
//   {
//     id: 4,
//     text: "Quiero Donar",
//     price: 500,
//     img: "/assets/Donar-4.jpg",
//     category: "minimo",
//   },
//   {
//     id: 5,
//     text: "Quiero Donar",
//     price: 750,
//     img: "/assets/dona5.jpg",
//     category: "maximo",
//   },
//   {
//     id: 6,
//     text: "Quiero Donar",
//     price: 1000,
//     img: "/assets/dona6.jpg",
//     category: "maximo",
//   },
//   {
//     id: 7,
//     text: "Quiero Donar",
//     price: 1500,
//     img: "/assets/dona7.jpg",
//     category: "maximo",
//   },
//   {
//     id: 8,
//     text: "Quiero Donar",
//     price: 2000,
//     img: "/assets/dona8.jpg",
//     category: "maximo",
//   },
// ];

// Definición de la función getAnimals

// const getAnimals = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (animals.length > 0) {
//         resolve(animals);
//       } else {
//         reject("No se encontro animals");
//       }
//     }, 1000);
//   });
// };

const ItemDetailContainer = () => {
  // const [animalData, setAnimalData] = useState([]);

  // const { detalleId } = useParams();
  const [data, setData] = useState([]);
  console.log(data);

  // useEffect(() => {
  //   getAnimals()
  //     .then((result) => {
  //       const filteredAnimal = result.find(
  //         (animal) => animal.id === parseInt(detalleId)
  //       );

  //       if (filteredAnimal) {
  //         setAnimalData([filteredAnimal]);
  //       } else {
  //         console.error("Animal no encontrado");
  //         setAnimalData([]);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       setAnimalData([]);
  //     });
  // }, [detalleId]);
  useEffect(() => {
    const queryDb = getFirestore();
    const docRef = doc(queryDb, "Adopciones", "z8Lvc3KT4IiWt5xRmEfD");
    //   getDoc(queryDoc).then((res) => {
    //     if (res.exists()) {
    //       const docs = res.data();
    //       setData(docs);
    //     }
    //   });
    // }, []);
    getDoc(docRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const docs = docSnapshot.data();
          setData(docs);
        } else {
          console.error("El documento no existe.");
          setData([]); // Podrías mostrar un mensaje de error en tu JSX
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setData([]); // Manejo de errores
      });
  }, []);

  return (
    <>
      {/* {animalData.length > 0 ? (
        <ItemDetail animals={animalData[0]} />
      ) : (
        <div>Buscando...</div>
      )} */}
      {/* <ItemDetail data={data} /> */}
      <h1>Hola</h1>
    </>
  );
};

export default ItemDetailContainer;

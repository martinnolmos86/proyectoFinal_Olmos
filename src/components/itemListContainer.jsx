import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  // useEffect(() => {
  //   const queryDb = getFirestore();
  //   const queryCollection = collection(queryDb, "adopcion");
  //   if (categoryId) {
  //   const queryFilter = query(
  //     queryCollection,
  //     where("category", "==", categoryId)
  //   ) getDocs(queryFilter)
  //   .then((res) => {
  //     const animalData = res.docs.map((animal) => ({
  //       id: animal.id,
  //       ...animal.data(),
  //     }));
  // } else {

  //   getDocs(queryCollection)
  //     .then((res) => {
  //       const animalData = res.docs.map((animal) => ({
  //         id: animal.id,
  //         ...animal.data(),
  //       }));
  //       // setData(animalData);
  //     }
  // }, [categoryId]);

  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, "adopcion");

    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoriaId)
      );
      console.log("Before query execution");
      getDocs(queryFilter).then((res) => {
        setData(
          res.docs.map((animal) => ({
            id: animal.id,
            ...animal.data(),
          }))
        );
        console.log(
          "Data from query:",
          res.docs.map((animal) => ({ id: animal.id, ...animal.data() }))
        );
      });
    } else {
      getDocs(queryCollection)
        .then((res) => {
          setData(
            res.docs.map((animal) => ({
              id: animal.id,
              ...animal.data(),
            }))
          );
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [categoriaId]);
  return (
    <>
      <ItemList animals={data} />
    </>
  );
};

export default ItemListContainer;

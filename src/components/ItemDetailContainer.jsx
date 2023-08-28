import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState([null]);
  const [isLoading, setIsLoading] = useState(true);
  const { detalleId } = useParams();
  useEffect(() => {
    const queryDb = getFirestore();
    const docRef = doc(queryDb, "adopcion", detalleId);
    setTimeout(() => {
      getDoc(docRef)
        .then((docSnapshot) =>
          setData({ id: docSnapshot.id, ...docSnapshot.data() })
        )
        .catch((error) => {
          console.error("Error:", error);
          setData(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  }, [detalleId]);
  return (
    <>
      {isLoading ? (
        <div>Buscando...</div>
      ) : data ? (
        <ItemDetail
          animals={{
            id: data.id,
            text: data.text,
            price: data.price,
            img: data.img,
          }}
        />
      ) : (
        <div>El documento no existe.</div>
      )}
    </>
  );
};

export default ItemDetailContainer;

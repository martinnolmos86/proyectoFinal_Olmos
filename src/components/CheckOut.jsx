import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useCartContext } from "../context/CartContext";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CheckOut = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    repeatEmail: "",
  });

  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const order = {
    buyer: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    },
    items: cart.map((product) => ({
      id: product.id || "",
      title: product.title || "",
      price: product.price || 0,
      quantity: product.quantity || 0,
    })),
    total: totalPrice(),
  };

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.email === formData.repeatEmail
    ) {
      const db = getFirestore();
      const orderCollection = collection(db, "orders");
      addDoc(orderCollection, order)
        .then(({ id }) => {
          console.log("Orden enviada con éxito. ID de la orden:", id);
          clearCart();
          setShowForm(false);
          toast.success(`Compra Exitosa - Número de Orden: ${id}`);
          navigate(`/purchase-success/${id}`);
        })

        .catch((error) => {
          console.error("Error al enviar la orden:", error);
        });
    }
  };
  return (
    <>
      <StyleTittle>
        <div className="div-tittle">
          <h2>Terminar compra</h2>
          <h5>Por favor llenar con sus datos</h5>
        </div>{" "}
      </StyleTittle>
      {showForm && (
        <StyleForm>
          <form>
            <p>Nombre:</p>
            <input
              className="field"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <p>Teléfono:</p>
            <input
              className="field"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <p> Email:</p>
            <input
              className="field"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <p> Repita su Email:</p>
            <input
              className="field"
              type="email"
              name="repeatEmail"
              value={formData.repeatEmail}
              onChange={handleInputChange}
              required
            />{" "}
            <button
              className="center-content"
              type="button"
              onClick={handleSubmit}
              disabled={
                !(
                  formData.name &&
                  formData.email &&
                  formData.repeatEmail &&
                  formData.phone &&
                  formData.email === formData.repeatEmail
                )
              }
            >
              Finalizar Compra
            </button>
          </form>
        </StyleForm>
      )}
    </>
  );
};
const StyleForm = styled.div`
  form {
    width: 400px;
    background: #24303c;
    padding: 30px;
    font-family: "Poppins", sans-serif;
    box-shadow: 7px 13px 37px #000;
    margin: auto;
    margin-top: 30px;
    border-radius: 4px;
    color: white;
    .field {
      width: 100%;
      background: #24303c;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 16px;
      border: 1px solid white;
      font-size: 18px;
    }
    button {
      width: 100%;
      background: #e8a138;
      border: none;
      padding: 12px;
      color: white;
      margin: 16px 0;
      font-size: 16px;
    }
  }
`;
const StyleTittle = styled.div`
  .div-tittle {
    font-family: "Poppins", sans-serif;
    text-align: center;
    h2 {
      font-size: 40px;
      font-weight: 600;
    }
    h5 {
      font-size: 25px;
      font-weight: 400;
    }
  }
`;

export default CheckOut;

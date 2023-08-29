import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useCartContext } from "../context/CartContext";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
          clearCart(); // Limpia el carrito después de enviar la orden
          setShowForm(false); // Oculta el formulario después de enviar la orden
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
      <h2>Terminar compra</h2>
      <h5>Por favor llenar con sus datos</h5>
      {showForm && (
        <form>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Repita su Email:
            <input
              type="email"
              name="repeatEmail"
              value={formData.repeatEmail}
              onChange={handleInputChange}
              required
            />
          </label>
          <button
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
      )}
    </>
  );
};
export default CheckOut;

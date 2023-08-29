import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

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
    if (formData.name && formData.email && formData.phone) {
      const db = getFirestore();
      const orderCollection = collection(db, "orders");
      addDoc(orderCollection, order)
        .then(({ id }) => {
          console.log("Orden enviada con éxito. ID de la orden:", id);
          clearCart(); // Limpia el carrito después de enviar la orden
          setShowForm(false); // Oculta el formulario después de enviar la orden
          // Puedes redirigir al usuario a una página de confirmación aquí si lo deseas.
          Swal.fire({
            icon: "success",
            title: "Compra Exitosa",
            text: `Número de Orden: ${id}`,
          });
        })

        .catch((error) => {
          console.error("Error al enviar la orden:", error);
        });
    }
  };
  if (cart.length === 0) {
    return (
      <>
        <p>Tu carrito está vacío.</p>
        <Link to="/">Volver a la tienda</Link>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total:{totalPrice()}</p>
      <Link to="/checkout">Emitir Compra</Link>
    </>
  );
};

export default Cart;

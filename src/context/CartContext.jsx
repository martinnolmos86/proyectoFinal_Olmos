import React from "react";
import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // CARRITO VACIO
  const [cart, setCart] = useState([]);
  // LIMPIAR CARRITO
  const clearCart = () => setCart([]);
  // FIND PARA SABER SI HAY UN PRODUCTO EN EL CART
  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;
  // REMOVER UN ELEMENTO SELECCIONANDO X
  const removeCart = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  // AGREGAR AL CART

  const addProduct = (item, newQuantity) => {
    const cantidadNumerica = parseInt(newQuantity, 10); // Asegúrate de que newQuantity sea un número
    const existingProductIndex = cart.findIndex((prod) => prod.id == item.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].newQuantity += cantidadNumerica;
      setCart(updatedCart);
    } else {
      // console.log("Adding to Cart:",
      //  [
      //   ...cart,
      //   { ...item, newQuantity: cantidadNumerica },
      // ]);
      setCart([...cart, { ...item, newQuantity: cantidadNumerica }]);
    }
  };
  // FX COSTO TOTAL
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.newQuantity * act.price, 0);
  };
  // TOTAL PRODUCTOS PARA VER EN EL CARTWIDGET

  const totalProduct = () =>
    cart.reduce((acumulador, producActual) => {
      return acumulador + producActual.newQuantity;
    }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProduct,
        clearCart,
        isInCart,
        removeCart,
        totalPrice,
        totalProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, useCartContext };

export default CartProvider;

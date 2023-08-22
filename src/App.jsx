import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />.
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />

            <Route
              exact
              path="/detail/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

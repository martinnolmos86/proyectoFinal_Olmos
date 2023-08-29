import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PurchaseSuccess from "./components/PurchaseSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
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
            <Route path="/checkout" element={<CheckOut />} />
            <Route
              path="/purchase-success/:orderId"
              element={<PurchaseSuccess />}
            />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
          />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
      <ItemCount />
    </>
  );
}

export default App;

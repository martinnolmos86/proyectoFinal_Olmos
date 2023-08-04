import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />.
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}

          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/itemDetailContainer"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

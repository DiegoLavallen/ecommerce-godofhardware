import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/Cart/CartContainer";
import Form from "./components/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
          {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
        </Route>
        <Route path="/Cart" element={<CartContainer />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <div className="App">
//   <Navbar />

//   {/* <CounterContainer /> */}
//   <ItemListContainer />
//   {/* <FetchingData /> */}
//   {/* <PruebaFetchUno /> */}
//   {/* <PruebaFetchDos /> */}
// </div>

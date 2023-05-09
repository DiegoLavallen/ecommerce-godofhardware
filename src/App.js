import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/Cart/CartContainer";
import Form from "./components/Form/Form";
import CartContextProvider from "./Context/CartContext";
import FormCheckoutContainer from "./components/FormCheckout/FormCheckoutContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/Checkout" element={<FormCheckoutContainer />} />
            <Route path="/Cart" element={<CartContainer />} />
          </Route>
        </Routes>
      </CartContextProvider>
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

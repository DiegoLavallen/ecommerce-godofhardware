import "./App.css";
//import CounterContainer from "./components/Counter/CounterContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar color="blue" />

      {/* <CounterContainer /> */}
      <ItemListContainer />
    </div>
  );
}

export default App;

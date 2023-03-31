import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";
import ItemList from "./components/ItemList/ItemList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let saludo = "hola juancito como estas";

  return (
    <div className="App">
      <Navbar color="blue" />
      <ItemList greeting={saludo} />
      <CounterContainer />
    </div>
  );
}

export default App;

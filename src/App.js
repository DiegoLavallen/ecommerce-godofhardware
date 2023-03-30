import "./App.css";
import Counter from "./components/Counter/Counter";
import ItemList from "./components/ItemList/ItemList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let saludo = "hola juancito como estas";

  return (
    <div className="App">
      <Navbar color="blue" />
      <ItemList greeting={saludo} />
      <Counter />
    </div>
  );
}

export default App;

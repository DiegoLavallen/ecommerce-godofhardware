import ItemList from "./ItemList";

const ItemListContainer = (greeting) => {
  return (
    <div>
      <ItemList saludo={greeting} />
    </div>
  );
};

export default ItemListContainer;

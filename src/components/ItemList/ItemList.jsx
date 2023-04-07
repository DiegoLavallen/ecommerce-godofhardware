const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex" }}>
      {items.map((item) => {
        return (
          <div>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;

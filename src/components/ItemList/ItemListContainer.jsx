import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { CircleLoader } from "react-spinners";
import { db } from "../../FirebaseConfig";
import { getDocs, collection, where, query } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const ItemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = ItemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          // console.log(product.data(), product.id)
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "200px",
        }}
      >
        <CircleLoader color="#d92f23" size={100} />
      </div>
    );
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

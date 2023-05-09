import React, { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../FirebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregar al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let cantidadTotal = getTotalQuantityById(product.id);
  console.log(cantidadTotal);

  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};

export default ItemDetailContainer;

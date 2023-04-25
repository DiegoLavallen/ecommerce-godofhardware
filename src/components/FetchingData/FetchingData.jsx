import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [posts, setPosts] = useState([]);
  const [dataById, setDataByID] = useState({});

  useEffect(() => {
    const obtenerPost = fetch("https://jsonplaceholder.typicode.com/users");
    obtenerPost.then((res) => res.json()).then((res) => setPosts(res));

    const obtenerPorId = fetch("https://jsonplaceholder.typicode.com/users/2");
    obtenerPorId.then((res) => res.json()).then((res) => setDataByID(res));
  }, []);

  const crearNuevoPost = () => {
    const crearPost = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      // headers: {
      //   "autorizaation": "asfiklpoajsf",
      //   "content-type": "aplication-json"
      // },
      body: JSON.stringify({
        userId: 15,
        title: "Estoy creando un post",
        body: "esta es una prueba de el verbo POST desde el front",
      }),
    });
    crearPost.then((res) => res.json()).then((res) => console.log(res));
  };

  const editarUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/2", {
      method: "PATCH",
      body: JSON.stringify({
        name: "Diego Lavallen",
      }),
    });
  };

  console.log(posts);
  console.log(dataById);

  return (
    <div>
      <h1>Peticiones</h1>
      <button onClick={crearNuevoPost}>Crear producto</button>
      <button onClick={editarUser}>Editar usuario</button>
    </div>
  );
};

export default FetchingData;

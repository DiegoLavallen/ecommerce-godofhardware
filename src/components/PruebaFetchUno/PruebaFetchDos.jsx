import React from "react";
import useFetch from "../../utils/hooks/useFetch";

const PruebaFetchDos = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/photos", []);
  return (
    <div>
      {data?.map((photos) => (
        <h4 key={photos.id}>{photos.url}</h4>
      ))}
    </div>
  );
};

export default PruebaFetchDos;

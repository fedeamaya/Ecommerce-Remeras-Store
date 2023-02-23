import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "/data.json";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [remeras, setRemeras] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setRemeras(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const remeraFilter = remeras.filter((remera) => remera.id === id);

  return <ItemDetail remeras={remeraFilter} />;
};

export default ItemDetailContainer;

import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import Data from "../data.json";
const ItemDetailContainer = () => {
  const { id } = useParams();

  const [remeras, setRemeras] = useState([]);

     useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setRemeras(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []); 

   const remeraFilter = Data.filter((remera) => remera.id == id);

  return <ItemDetail remeras={Data} />;
};

export default ItemDetailContainer;
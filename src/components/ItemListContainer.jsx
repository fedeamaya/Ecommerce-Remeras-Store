import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
const ItemListContainer = () => {


  const { talles } = useParams();


  const catFilter = Data.filter((remera) => remera.talle === talles);
  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Talles de Remeras
        </Heading>
      </Center>
      {talles ? <ItemList remeras={catFilter} /> : <ItemList remeras={Data} />}
    </div>
  );
};

export default ItemListContainer;

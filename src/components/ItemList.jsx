import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ remeras }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {remeras?.map((remera) => (
          <Item
            key={remera.id}
            id={remera.id}
            name={remera.name}
            description={remera.description}
            price={remera.price}
            img={remera.img}
            stock={remera.stock}
            talle={remera.talle}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
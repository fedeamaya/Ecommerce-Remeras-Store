import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
    Alert,
  } from "@chakra-ui/react"
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  
  const ItemDetail = ({ remeras }) => {
    const { id } = useParams();
  
    const remeraFilter = remeras.filter((remera) => remera.id == id);
  
    return (
      <>
        {remeraFilter.map((remera) => (
          <div key={remera.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src={remeraImage} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{remera.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Description: {remera.description}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Talle: {remera.talle}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {remera.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Price: $ {remera.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount
                    stock={remera.stock}
                    id={remera.id}
                    price={remera.price}
                    name={remera.name}
                  />
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
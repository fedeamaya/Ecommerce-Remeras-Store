import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(userName);
    console.log(userEmail);
    alert("Formulario enviado");
  };

  const deleteId = cart.map((item) => {
    return item.id;
  });

  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Carrito
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container
            key={item.id}
            maxW="container.sm"
            className="main-catalogue"
          >
            <Card maxW="sm" m="3rem">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Cantidad: {item.quantity}</Text>
                <Text>Precio: $ {item.price}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="red"
                  onClick={() => console.log("Eliminando")}
                >
                  Eliminar del carrito
                </Button>
              </CardFooter>
            </Card>
          </Container>
        );
      })}
      <Container className="cart-container">
        <FormControl onSubmit={handleSubmit}>
          <Box>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" onChange={(e) => setUserName(e.target.value)} />
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <FormHelperText>Su correo no sera compartido</FormHelperText>
          </Box>
          <FormLabel>¿Algo que quieras decirnos?</FormLabel>
          <Textarea></Textarea>
          <Box className="btn-send">
            <Button type="submit" colorScheme="teal" variant="outline">
              Enviar informacion
            </Button>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};

export default Cart;
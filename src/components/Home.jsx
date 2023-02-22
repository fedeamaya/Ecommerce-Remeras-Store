import { Heading, Center, Box, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <div className='home-container'>
        <Center>
            <Box boxSize='xxl'>
                <p>Bienvenido a | Remeras Store |</p>
                <Image src='https://camisetas-serigrafia.es/wp-content/uploads/2018/07/proceso-productivo-de-hacer-camisetas_5928.jpg' alt='remera' />
            </Box>
        </Center>
    </div>
  );
};

export default Home;
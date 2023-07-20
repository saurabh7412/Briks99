// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
// import axios from 'axios';
// import 'leaflet/dist/leaflet.css';
// import LocationMap from '../components/LocationMap';

// export const SingleHousePage = () => {
//   const { id } = useParams();
//   const [house, setHouse] = useState(null);

//   useEffect(() => {
//     const fetchHouseData = async () => {
//       try {
//         const response = await axios.get(`https://real-gray-salamander-tie.cyclic.app/data/${id}`);
//         setHouse(response.data);
//       } catch (error) {
//         console.error('Error fetching house data:', error);
//       }
//     };

//     fetchHouseData();
//   }, [id]);

//   if (!house) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <Flex justifyContent="center" alignItems="center">
//       <Box p={4}>
//         <Flex flexDirection="row">
//           {/* Display image on the left */}
//           <Image src={house.image} alt={house.title} borderRadius="md" h="400px" w="60%" />

//           {/* Display LocationMap on the right */}
//           <Box ml={4} width="400px">
//             <LocationMap lat={house.lat} long={house.long} tag={house.location} />
//           </Box>
//         </Flex>

//         {/* Display other house data */}
//         <Text fontSize="lg" fontWeight="bold" mt={2}>
//           {house.title}
//         </Text>
//         <Text fontSize="lg" color="gray.500">
//           {house.location}
//         </Text>
//         <Flex mt={4}>
//         <Button colorScheme="blue" mr={4}>
//           Button 1
//         </Button>
//         <Button colorScheme="green">
//           Button 2
//         </Button>
//       </Flex>
//         <Text fontWeight="bold" fontSize="lg">
//           Description:-
//         </Text>
//         <Text mt={4}>{house.description}</Text>
//         <Text fontSize="lg" fontWeight="bold" mt={2}>
//           Price: ${house.price}
//         </Text>
//         <Text fontSize="lg">
//           {house.bedrooms} Bed, {house.bathrooms} Bath, {house.surface}
//         </Text>
//       </Box>
//     </Flex>
//   );
// };


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import LocationMap from '../components/LocationMap';

export const SingleHousePage = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const fetchHouseData = async () => {
      try {
        const response = await axios.get(`https://real-gray-salamander-tie.cyclic.app/data/${id}`);
        setHouse(response.data);
      } catch (error) {
        console.error('Error fetching house data:', error);
      }
    };

    fetchHouseData();
  }, [id]);

  if (!house) {
    return <Text>Loading...</Text>;
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <Box p={4} maxWidth="1200px">
        {/* Display other house data */}
        <Text fontSize="3xl" fontWeight="bold" mb={2}>
          {house.title}
        </Text>
        <Text fontSize="lg" color="gray.500" mb={4}>
          {house.location}
        </Text>

        {/* Buttons */}
        <Flex alignItems="center">
          <Button
           backgroundColor="#f41515"
           color="white"
            size="lg"
            mr={4}
            _hover={{
              backgroundColor: 'white',
              color: '#f41515',
              border: '1px solid #f41515',
            }}
          >
            Schedule a Tour
          </Button>
          <Button
            size="lg"
            _hover={{
              backgroundColor: 'white',
              color: '#f41515',
              border: '1px solid #f41515',
            }}
          >
            Request Info
          </Button>
        </Flex>

        <Flex flexDirection="row" mt={4}>
          {/* Display image on the left */}
          <Image src={house.image} alt={house.title} borderRadius="md" h="400px" w="60%" />

          {/* Display LocationMap on the right */}
          <Box ml={4} width="50%">
            <LocationMap lat={house.lat} long={house.long} tag={house.location} />
          </Box>
        </Flex>

        <Text fontSize="2xl" fontWeight="bold" mt={4}>
          Description
        </Text>
        {/* Set the max number of lines for the description */}
        <Text mt={2} fontSize="lg" noOfLines={6}>
          {house.description}
        </Text>

        <Flex mt={4} alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            Price: ${house.price}
          </Text>
          <Text fontSize="lg" ml={4}>
            {house.bedrooms} Bed, {house.bathrooms} Bath, {house.surface}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};




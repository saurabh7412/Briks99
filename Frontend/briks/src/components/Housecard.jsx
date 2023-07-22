// HouseCard.js
import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "../components/HouseListing.css";

const HouseCard = ({ house }) => {
  return (
    <Box
      p={4}
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      mb={4}
      maxW="500px"
    >
     <Flex h="200px" justifyContent="center" alignItems="center">
     <Link to={`/posts/${house.id}`}>
      <Image src={house.image} alt={house.title} className="img-zoomable" borderRadius="md" h="200px"/>
      </Link>
      </Flex>
      <Flex mt={2} justifyContent="space-between" alignItems="center">
        <Text fontSize="lg" fontWeight="bold">
          {house.title}
        </Text>
        <Text fontSize="md" color="gray.500">
          {house.location}
        </Text>
      </Flex>
      <Text mt={2}>{house.description}</Text>
      <Flex mt={2} justifyContent="space-between" alignItems="center">
        <Text fontSize="md" fontWeight="bold">
          Price: ${house.price}
        </Text>
        <Text fontSize="sm">
          {house.bedrooms} Bed, {house.bathrooms} Bath, {house.surface}
        </Text>
      </Flex>
    </Box>
  );
};

export default HouseCard;


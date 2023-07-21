import React, { useEffect, useState } from 'react';
import { Box, Flex, Select, Input, SimpleGrid } from '@chakra-ui/react';
import HouseCard from './Housecard';
import axios from 'axios';

const HousesListing = () => {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [bedroomFilter, setBedroomFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          window.location.href = '/login';
          return;
        }
        const data1 = {
          headers: {
            Authorization: `${token}`,
          },
        };
        // const response = await axios.get('https://real-gray-salamander-tie.cyclic.app/data',data);
        const response = await axios.get('https://enormous-library-3081-backend.onrender.com/posts/',data1);
        console.log(response.data)
        setHouses(response.data);
        setFilteredHouses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  useEffect(() => {
    handleFilter();
  }, [typeFilter, bedroomFilter, priceFilter]);

  const handleFilter = () => {
    let filteredData = houses;

    if (typeFilter) {
      filteredData = filteredData.filter((house) => house.type === typeFilter);
    }

    if (bedroomFilter) {
      filteredData = filteredData.filter((house) => house.bedrooms === bedroomFilter.toString());
    }

    if (priceFilter) {
      filteredData = filteredData.filter((house) => house.price <= Number(priceFilter));
    }

    setFilteredHouses(filteredData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    // <Box p={4} w="80%" margin={"auto"}>
    //   <Flex justify="space-between" align="center" mb={4}>
    //     <Box>
    //       <label htmlFor="type-filter">Type:</label>
    //       <Select
    //         id="type-filter"
    //         value={typeFilter}
    //         onChange={(e) => setTypeFilter(e.target.value)}
    //       >
    //         <option value="">All</option>
    //         <option value="Buy">Buy</option>
    //         <option value="Rent">Rent</option>
    //         <option value="Sold">Sold</option>
    //       </Select>
    //     </Box>
    //     <Box>
    //       <label htmlFor="bedroom-filter">Bedroom:</label>
    //       <Input
    //         id="bedroom-filter"
    //         type="number"
    //         value={bedroomFilter}
    //         onChange={(e) => setBedroomFilter(e.target.value)}
    //       />
    //     </Box>
    //     <Box>
    //       <label htmlFor="price-filter">Max Price:</label>
    //       <Input
    //         id="price-filter"
    //         type="number"
    //         value={priceFilter}
    //         onChange={(e) => setPriceFilter(e.target.value)}
    //       />
    //     </Box>
    //   </Flex>
    //   <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
    //     {filteredHouses.length > 0 ? (
    //       filteredHouses.map((house) => (
    //         <HouseCard key={house.id} house={house} />
    //       ))
    //     ) : (
    //       <div>No houses found.</div>
    //     )}
    //   </SimpleGrid>
    // </Box>
    <Box p={4} maxW="1200px" m="auto">
      <Flex flexWrap="wrap" justify="space-between" align="center" mb={4}>
        <Box w={{ sm: '100%', md: 'auto' }}>
          <label htmlFor="type-filter">Type:</label>
          <Select
            id="type-filter"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Buy">Buy</option>
            <option value="Rent">Rent</option>
            <option value="Sold">Sold</option>
          </Select>
        </Box>
        <Box w={{ sm: '100%', md: 'auto' }} mt={{ sm: 4, md: 0 }}>
          <label htmlFor="bedroom-filter">Bedroom:</label>
          <Input
            id="bedroom-filter"
            type="number"
            value={bedroomFilter}
            onChange={(e) => setBedroomFilter(e.target.value)}
          />
        </Box>
        <Box w={{ sm: '100%', md: 'auto' }} mt={{ sm: 4, md: 0 }}>
          <label htmlFor="price-filter">Max Price:</label>
          <Input
            id="price-filter"
            type="number"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </Box>
      </Flex>

      {/* Use SimpleGrid to display HouseCards */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {/* Render house cards */}
        {filteredHouses.length > 0 ? (
          filteredHouses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))
        ) : (
          <div>No houses found.</div>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default HousesListing;



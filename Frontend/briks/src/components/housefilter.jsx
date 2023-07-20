
import React from 'react';
import { Box, Flex, Select, Input, Stack, Text } from '@chakra-ui/react';

const HouseFilter = ({
  typeFilter,
  bedroomFilter,
  priceFilter,
  setTypeFilter,
  setBedroomFilter,
  setPriceFilter,
}) => {
  return (
    <Box p={4} bg="gray.100" borderRadius="md" mb={4}>
      <Flex align="center" justify="space-between">
        <Stack direction="row" spacing={4}>
          <Text>Type:</Text>
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
        </Stack>
        <Stack direction="row" spacing={4}>
          <Text>Bedroom:</Text>
          <Input
            id="bedroom-filter"
            type="number"
            value={bedroomFilter}
            onChange={(e) => setBedroomFilter(e.target.value)}
          />
        </Stack>
        <Stack direction="row" spacing={4}>
          <Text>Max Price:</Text>
          <Input
            id="price-filter"
            type="number"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </Stack>
      </Flex>
    </Box>
  );
};

export default HouseFilter;

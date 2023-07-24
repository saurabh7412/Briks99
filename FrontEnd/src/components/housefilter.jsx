import React from "react";
import { Box, Flex, Select, Input, Stack, Text } from "@chakra-ui/react";

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
          <Select
            id="bedroom-filter"
            value={bedroomFilter}
            onChange={(e) => setBedroomFilter(e.target.value)}
          >
            {/* Generating options from 1 to 6 */}
            {[...Array(6)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </Select>
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

// <<<<<<< finial-code-briks99
import React, { useEffect, useState } from "react";
import { Box, Flex, Select, Input, SimpleGrid, Button } from "@chakra-ui/react";
import HouseCard from "./Housecard";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
// =======
import React, { useEffect, useState } from 'react';
import { Box, Flex, Select, Input, SimpleGrid, Button } from '@chakra-ui/react';
import HouseCard from './Housecard';
import axios from 'axios';

// >>>>>>> main

const HousesListing = () => {
  const labelStyle = {
    fontWeight: "bold",
  };
  const [houses, setHouses] = useState([]);
  console.log(houses);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [bedroomFilter, setBedroomFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [loading, setLoading] = useState(true);
// <<<<<<< finial-code-briks99
  const [page, setPage] = useState(1);

  const priceRangeOptions = [
    { label: "Any", value: "" },
    { label: "Less than $100,000", value: "0-100000" },
    { label: "$100,000 - $200,000", value: "100000-200000" },
    { label: "$200,000 - $300,000", value: "200000-300000" },
    { label: "$300,000 - $400,000", value: "300000-400000" },
    { label: "More than $400,000", value: "400000-" },
// =======
  const[page, setPage]=useState(1)

  const priceRangeOptions = [
    { label: 'Any', value: '' },
    { label: 'Less than $100,000', value: '0-100000' },
    { label: '$100,000 - $200,000', value: '100000-200000' },
    { label: '$200,000 - $300,000', value: '200000-300000' },
    { label: '$300,000 - $400,000', value: '300000-400000' },
    { label: 'More than $400,000', value: '400000-' },
// >>>>>>> main
  ];

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/login";
          return;
        }
        const data1 = {
          headers: {
            Authorization: `${token}`,
          },
        };
        // const response = await axios.get('https://real-gray-salamander-tie.cyclic.app/data/');
// <<<<<<< finial-code-briks99
        const response = await axios.get(
          `https://enormous-library-3081-backend.onrender.com/posts/?limit=6&page=${page}`,
          data1
        );
        console.log(response.data.AllPosts);
        setHouses(response.data.AllPosts);
        setFilteredHouses(response.data.AllPosts);
// =======
        const response = await axios.get(`https://enormous-library-3081-backend.onrender.com/posts/?limit=6&page=${page}`,data1);
        console.log(response.data)
        setHouses(response.data);
        setFilteredHouses(response.data);
// >>>>>>> main
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchHouses();
  }, [page]);

  useEffect(() => {
    handleFilter();
// <<<<<<< finial-code-briks99
  }, [typeFilter, bedroomFilter, priceFilter]);
  // console.log(filteredHouses.AllPosts)
// =======
  }, [typeFilter, bedroomFilter, priceFilter,page]);
  console.log(filteredHouses)
// >>>>>>> main

  const handleFilter = () => {
    let filteredData = houses;

    if (typeFilter) {
      filteredData = filteredData.filter((house) => house.type === typeFilter);
    }

    if (bedroomFilter) {
// <<<<<<< finial-code-briks99
      filteredData = filteredData.filter(
        (house) => house.bedrooms === bedroomFilter
      );
      console.log(filteredData);
    }
    if (priceFilter) {
      const [minPrice, maxPrice] = priceFilter.split("-");

      if (minPrice) {
        filteredData = filteredData.filter(
          (house) => house.price >= Number(minPrice)
        );
      }

      if (maxPrice) {
        filteredData = filteredData.filter(
          (house) => house.price <= Number(maxPrice)
        );
// =======
      filteredData = filteredData.filter((house) => house.bedrooms === bedroomFilter);
      console.log(filteredData)
    }
    if (priceFilter) {
      const [minPrice, maxPrice] = priceFilter.split('-');

      if (minPrice) {
        filteredData = filteredData.filter((house) => house.price >= Number(minPrice));
      }

      if (maxPrice) {
        filteredData =filteredData.filter((house) => house.price <= Number(maxPrice));
// >>>>>>> main
      }
    }


    setFilteredHouses(filteredData);
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
// <<<<<<< finial-code-briks99
    <Box>
    <Navbar/>
// =======
 
// >>>>>>> main
    <Box p={4} maxW="1200px" m="auto">
      <Flex flexWrap="wrap" justify="space-between" align="center" mb={4}>
        <Box w={{ sm: "100%", md: "auto" }}>
          <label htmlFor="type-filter" style={labelStyle}>
            Type:
          </label>
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
        <Box w={{ sm: "100%", md: "auto" }} mt={{ sm: 4, md: 0 }}>
          <label htmlFor="bedroom-filter" style={labelStyle}>
            Bedroom:
          </label>
          <Select
            id="bedroom-filter"
            value={bedroomFilter}
            onChange={(e) => setBedroomFilter(e.target.value)}
          >
            {[...Array(6)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </Select>
        </Box>
// <<<<<<< finial-code-briks99
        <Box w={{ sm: "100%", md: "auto" }} mt={{ sm: 4, md: 0 }}>
// =======
        <Box w={{ sm: '100%', md: 'auto' }} mt={{ sm: 4, md: 0 }}>
// >>>>>>> main
          {/* <label htmlFor="price-filter" style={labelStyle}>Max Price:</label>
          <Input
            id="price-filter"
            type="number"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          /> */}
// <<<<<<< finial-code-briks99
          <label htmlFor="price-filter" style={labelStyle}>
            Price Range:
          </label>
// =======
           <label htmlFor="price-filter" style={labelStyle}>Price Range:</label>
// >>>>>>> main
          <Select
            id="price-filter"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            {priceRangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {filteredHouses.length > 0 ? (
          filteredHouses.map((house) => (
            <HouseCard key={house._id} house={house} />
          ))
        ) : (
          <div>No houses found.</div>
        )}
      </SimpleGrid>

// <<<<<<< finial-code-briks99
      <Flex justify="space-between" align="center" flexWrap="wrap">
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          isDisabled={page < 2}
        >
          Prev
        </Button>
        <Button disabled={true}>{page}</Button>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          isDisabled={page === 5}
        >
          Next
        </Button>
      </Flex>
    </Box>
    <Footer/>
// =======
      <Flex justify="space-between" align="center">
        <Button onClick={()=>setPage((prev)=>prev-1)} disabled={page === 1}>
          Prev
        </Button>
        <Button  disabled={true}>
        {page}  
        </Button>
        <Button onClick={()=>setPage((prev)=>prev+1)} disabled={Math.ceil(houses.length/6)===page}>
          Next
        </Button>
      </Flex>
// >>>>>>> main
    </Box>


  );
};

export default HousesListing;

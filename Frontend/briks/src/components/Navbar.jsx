import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Input,
  Link,
  useDisclosure,
  useColorMode,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";

import { HamburgerIcon, SearchIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import WebLogo from "../img/newlogo.png";
import { login, logout } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSmallerThanMedium] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  // console.log(auth)

  let links;

  if(auth){
     links = [
      { path: "/buy", title: "Buy" },
      { path: "/rent", title: "Rent" },
      { path: "/blog", title: "Blog" }
    ];

  } else {
     links = [
      { path: "/buy", title: "Buy" },
      { path: "/rent", title: "Rent" },
      { path: "/blog", title: "Blog" },
      { path: "/login", title: "login" },
      { path: "/signup", title: "Signup" },
    ];
  }




  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear()
    // Redirect to the login page after logout
    // window.location.href = "/login"; // Replace with the path to your login page
    navigate("/");
  };

  const mobileBgColor = colorMode === "light" ? "#333" : "black";
  // const mobileBgColor = "#333";
  return (
    <Box
      bg={
        isSmallerThanMedium
          ? mobileBgColor
          : colorMode === "light"
          ? "white"
          : "black"
      }
      py={3}
      position="sticky"
      top="0" // Stick the navbar at the top
      zIndex="999"
      //   border="1px solid"
      //   BoxShadow= "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"
      // BoxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      BoxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        maxW="1200px"
        px={4}
      >
        <Box>
          <Link href="/">
            <img src={WebLogo} alt="Trulia Logo" width="100px" />
          </Link>
        </Box>
        {/* Hamburger Icon for mobile */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onToggle}
          />
        </Box>
        <Box display={{ base: "none", md: "flex" }} alignItems="center">
          <Flex
            align="center"
            mr="240px"
            justify="space-between"
            fontSize="20px"
            fontWeight="500"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                px={4}
                py={2}
                color={colorMode === "light" ? "black" : "white"}
                _hover={{ textDecoration: "none", bg: "blue.700" }}
              >
                {link.title}
              </Link>
            ))} 
            
            {/* Login/Sign up button for large screens
            {/* <Link
              href="/login"
              px={4}
              py={2}
              color={colorMode === "light" ? "black" : "white"}
              _hover={{ textDecoration: "none", bg: "blue.700" }}
            >
              Login / Sign Up
            </Link> */}

            {/* <a href="/">home</a>
            <br/>
           <a style={{visibility: auth ? "hidden" : "visible"}} href="/login">login</a>
            <br/>
            <a href="/">home</a>
            <a href="/">home</a> */}
          </Flex>
          <Box ml={4}>
            <Input
              type="text"
              placeholder="Search Your Dream House"
              size="sm"
              width="250px"
              h="40px"
              bg={colorMode === "light" ? "white" : "gray.700"}
              color={colorMode === "light" ? "black" : "white"}
            />
          </Box>
        </Box>
        <IconButton
          aria-label="Toggle Dark Mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          ml={4}
        />
        {auth && <Button onClick={handleLogout}>Logout</Button>}
      </Flex>

      {/* Mobile Menu */}
      <Box>
        {isOpen && (
          <Box pb={4} display={{ base: "block", md: "none" }}>
            {/* Mobile menu links */}
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                px={4}
                py={2}
                display="block"
                color="white"
                _hover={{ textDecoration: "none", bg: "blue.700" }}
              >
                {link.title}
              </Link>
            ))}
            {/* Mobile search box */}
            <Box mt={2} ml={4}>
              <Input
                type="text"
                placeholder="Search"
                size="sm"
                width="200px"
                bg="white"
                color="black"
              />
              {/* <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                size="sm"
                bg="white"
                color="blue.600"
                // Adjust the margin and position of the SearchIcon
                position="absolute"
                right="277px"
                top="66%"
                transform="translateY(-50%)"
              /> */}
            </Box>
            {/* Login/Sign up button for mobile */}
            <Box mt={4} ml={4}>
              {/* <Link href="/login" px={4} py={2} display="block" color="white">
                Login / Sign Up
              </Link> */}
            </Box>
          </Box>
        )}
      </Box>
      {/* <hr/> */}
    </Box>
  );
};

export default Navbar;

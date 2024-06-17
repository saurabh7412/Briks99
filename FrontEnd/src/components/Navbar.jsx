import React, { useEffect, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import WebLogo from "../img/newlogo.png";
import { logout } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = ({ username }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSmallerThanMedium] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);
  const toast = useToast();

  const [isAuthenticated, setIsAuthenticated] = useState(auth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [auth]);

  const handleLogout = () => {
    dispatch(logout());
    setIsAuthenticated(false);
    navigate("/login");
    toast({
      title: "Logout success!",
      description: "Thanks for visiting.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const mobileBgColor = colorMode === "light" ? "#333" : "black";

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
      top="0"
      zIndex="999"
      boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
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
            <Link
              href="/posts"
              px={4}
              py={2}
              color={colorMode === "light" ? "black" : "white"}
              _hover={{ textDecoration: "none", bg: "blue.700" }}
            >
              Buy
            </Link>
            <Link
              href="/posts"
              px={4}
              py={2}
              color={colorMode === "light" ? "black" : "white"}
              _hover={{ textDecoration: "none", bg: "blue.700" }}
            >
              Rent
            </Link>
            <Link
              href="/mortagagecal"
              px={4}
              py={2}
              color={colorMode === "light" ? "black" : "white"}
              _hover={{ textDecoration: "none", bg: "blue.700" }}
            >
              Mortgage
            </Link>
            {!isAuthenticated && (
              <>
                <Link
                  href="/login"
                  px={4}
                  py={2}
                  color={colorMode === "light" ? "black" : "white"}
                  _hover={{ textDecoration: "none", bg: "blue.700" }}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  px={4}
                  py={2}
                  color={colorMode === "light" ? "black" : "white"}
                  _hover={{ textDecoration: "none", bg: "blue.700" }}
                >
                  Signup
                </Link>
              </>
            )}
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
        {isAuthenticated && (
          <>
            <Button bg={"red.300"} onClick={handleLogout}>
              Logout
            </Button>
            {/* <Button>Welcome {username}</Button> */}
          </>
        )}
        <a
          href="https://briks99-admin.netlify.app/admin/login"
          style={{ marginLeft: "20px" }}
        >
          <Button>Admin</Button>
        </a>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ base: "block", md: "none" }}>
          <Link
            href="/posts"
            px={4}
            py={2}
            display="block"
            color="white"
            _hover={{ textDecoration: "none", bg: "blue.700" }}
            onClick={onToggle}
          >
            Buy
          </Link>
          <Link
            href="/posts"
            px={4}
            py={2}
            display="block"
            color="white"
            _hover={{ textDecoration: "none", bg: "blue.700" }}
            onClick={onToggle}
          >
            Rent
          </Link>
          <Link
            href="/mortagagecal"
            px={4}
            py={2}
            display="block"
            color="white"
            _hover={{ textDecoration: "none", bg: "blue.700" }}
            onClick={onToggle}
          >
            Mortgage
          </Link>
          {!isAuthenticated && (
            <>
              <Link
                href="/login"
                px={4}
                py={2}
                display="block"
                color="white"
                _hover={{ textDecoration: "none", bg: "blue.700" }}
                onClick={onToggle}
              >
                Login
              </Link>
              <Link
                href="/signup"
                px={4}
                py={2}
                display="block"
                color="white"
                _hover={{ textDecoration: "none", bg: "blue.700" }}
                onClick={onToggle}
              >
                Signup
              </Link>
            </>
          )}
          <Box mt={2} ml={4}>
            <Input
              type="text"
              placeholder="Search"
              size="sm"
              width="200px"
              bg="white"
              color="black"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;

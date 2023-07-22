import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/AuthReducer/action";
// import authReducer from "./auth/reducer";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Image,
  Button,
  Heading,
  Link,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignupLogo from "../img/signup.png"

const Signup = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(register(userData));
  //   setUserData("");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(userData));
    setUserData({
      name: "",
      email: "",
      password: "",
    });
  };

  const toast = useToast(); // Chakra UI toast function

  // Display a toast message when user successfully registers
  if (auth.success) {
    toast({
      title: "Registration successful!",
      description: "You have successfully registered.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <Box>
      <Navbar/>
    <Flex
      minH={"70vh"}
      align={"center"}
      justify={"space-around"}
      width={"100%"}
      bg={useColorModeValue("gray.50", "gray.800")}
      marginBottom={-10}
    >
      <Flex
        gap={"30px"}
        direction={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        w={"90%"}
        m={"auto"}
        justifyContent={"space-around"}
      >
        <Box
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "45%",
            xl: "45%",
            "2xl": "45%",
          }}
          m={"auto"}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Let's Join Briks99 ✌️</Heading>
          </Stack>
          <Box
            mt={"10px"}
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>
                    {" "}
                    Name <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userData.name}
                    onChange={handleChange}
                    borderRadius={"none"}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>
                    Email address <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                    borderRadius={"none"}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>
                    Password <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                    borderRadius={"none"}
                  />
                </FormControl>

                <Stack spacing={10}>
                  <Stack
                    m={"30px 0 -10px 0"}
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Heading color={"gray.600"} fontWeight={"600"} size={"sm"}>
                      Already have an account?
                      <br />
                      <Link
                        href={"/login"}
                        style={{ fontWeight: "600", color: "orange" }}
                      >
                        So Let's Login
                      </Link>
                    </Heading>
                  </Stack>
                  <Button
                    borderRadius={"5px"}
                    type="submit"
                    bg={"#d7b256"}
                    color={"white"}
                    _hover={{
                      bg: "pink",
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Box>
        <Box
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "45%",
            xl: "45%",
            "2xl": "45%",
          }}
          m={"auto"}
        >
          <Image
            w={"100%"}
            src={SignupLogo}
            alt="signup-img"
          />
        </Box>
      </Flex>
    </Flex>
    <br/>
    <Footer/>
    </Box>
  );
};

export default Signup;

//

//https://o.remove.bg/downloads/b4857859-2e30-47fd-8cc2-9aceb80f14c6/sign-page-abstract-concept-vector-illustration_107173-25670-removebg-preview.png
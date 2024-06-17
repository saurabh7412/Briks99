

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { register } from "../Redux/AuthReducer/action";
// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
//   Image,
//   Button,
//   Heading,
//   Link,
//   useColorModeValue,
//   useToast,
// } from "@chakra-ui/react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import SignupLogo from "../img/signup.png";

// const Signup = () => {
//   const dispatch = useDispatch();
//   const { isError } = useSelector((state) => state.auth);
//   const toast = useToast();
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       userData.name.trim() === "" ||
//       userData.email.trim() === "" ||
//       userData.password.trim() === ""
//     ) {
//       return toast({
//         title: "Error",
//         description: "Please fill all input fields.",
//         status: "error",
//         position: "top",
//         duration: 4000,
//         isClosable: true,
//       });
//     }

//     if (userData.password.length < 8) {
//       return toast({
//         title: "Failed!!",
//         description: "Password must be at least eight characters long.",
//         status: "error",
//         position: "top",
//         duration: 4000,
//         isClosable: true,
//       });
//     }

//     dispatch(register(userData));
//     setUserData({
//       name: "",
//       email: "",
//       password: "",
//     });

//     toast({
//       title: "Success",
//       description: "Registration successful!",
//       status: "success",
//       position: "top",
//       duration: 4000,
//       isClosable: true,
//     });
//   };

//   return (
//     <Box>
//       <Navbar />
//       <Flex
//         minH={"70vh"}
//         align={"center"}
//         justify={"space-around"}
//         width={"100%"}
//         bg={useColorModeValue("gray.50", "gray.800")}
//         marginBottom={-10}
//       >
//         <Flex
//           gap={"30px"}
//           direction={{
//             base: "column-reverse",
//             sm: "column-reverse",
//             md: "column-reverse",
//             lg: "row",
//             xl: "row",
//             "2xl": "row",
//           }}
//           w={"90%"}
//           m={"auto"}
//           justifyContent={"space-around"}
//         >
//           <Box
//             w={{
//               base: "90%",
//               sm: "90%",
//               md: "90%",
//               lg: "45%",
//               xl: "45%",
//               "2xl": "45%",
//             }}
//             m={"auto"}
//           >
//             <Stack align={"center"}>
//               <Heading fontSize={"4xl"}>Let's Join Briks99 ✌️</Heading>
//             </Stack>
//             <Box
//               mt={"10px"}
//               rounded={"lg"}
//               bg={useColorModeValue("white", "gray.700")}
//               boxShadow={"lg"}
//               p={8}
//             >
//               <Stack spacing={4}>
//                 <form onSubmit={handleSubmit}>
//                   <FormControl>
//                     <FormLabel>
//                       {" "}
//                       Name <span style={{ color: "red" }}>*</span>
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="name"
//                       placeholder="Name"
//                       value={userData.name}
//                       onChange={handleChange}
//                       borderRadius={"none"}
//                     />
//                   </FormControl>

//                   <FormControl>
//                     <FormLabel>
//                       Email address <span style={{ color: "red" }}>*</span>
//                     </FormLabel>
//                     <Input
//                       type="email"
//                       name="email"
//                       placeholder="Email"
//                       value={userData.email}
//                       onChange={handleChange}
//                       borderRadius={"none"}
//                     />
//                   </FormControl>

//                   <FormControl>
//                     <FormLabel>
//                       Password <span style={{ color: "red" }}>*</span>
//                     </FormLabel>
//                     <Input
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       value={userData.password}
//                       onChange={handleChange}
//                       borderRadius={"none"}
//                     />
//                   </FormControl>

//                   <Stack spacing={10}>
//                     <Stack
//                       m={"30px 0 -10px 0"}
//                       direction={{ base: "column", sm: "row" }}
//                       align={"start"}
//                       justify={"space-between"}
//                     >
//                       <Heading
//                         color={"gray.600"}
//                         fontWeight={"600"}
//                         size={"sm"}
//                       >
//                         Already have an account?
//                         <br />
//                         <Link
//                           href={"/login"}
//                           style={{ fontWeight: "600", color: "orange" }}
//                         >
//                           So Let's Login
//                         </Link>
//                       </Heading>
//                     </Stack>
//                     <Button
//                       borderRadius={"5px"}
//                       type="submit"
//                       bg={"#d7b256"}
//                       color={"white"}
//                       _hover={{
//                         bg: "#ffc0cb",
//                       }}
//                     >
//                       Sign up
//                     </Button>
//                   </Stack>
//                 </form>
//               </Stack>
//             </Box>
//           </Box>
//           <Box
//             w={{
//               base: "90%",
//               sm: "90%",
//               md: "90%",
//               lg: "45%",
//               xl: "45%",
//               "2xl": "45%",
//             }}
//             m={"auto"}
//           >
//             <Image w={"100%"} src={SignupLogo} alt="signup-img" />
//           </Box>
//         </Flex>
//       </Flex>
//       <br />
//       <Footer />
//     </Box>
//   );
// };

// export default Signup;




import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/AuthReducer/action";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Image,
  Button,
  Heading,
  Link,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignupLogo from "../img/signup.png";

const Signup = () => {
  const dispatch = useDispatch();
  const { isError, isAuth, errorMessage } = useSelector((state) => state.auth);
  const toast = useToast();
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

    if (
      userData.name.trim() === "" ||
      userData.email.trim() === "" ||
      userData.password.trim() === ""
    ) {
      return toast({
        title: "Error",
        description: "Please fill all input fields.",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    }

    if (!passwordRegex.test(userData.password)) {
      return toast({
        title: "Failed!!",
        description:
          "Password must be at least eight characters long and contain at least one uppercase letter and one special character.",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    }

    dispatch(register(userData));
  };

  useEffect(() => {
    if (isAuth) {
      toast({
        title: "Success",
        description: "Registration successful!",
        status: "success",
        position: "top",
        duration: 4000,
        isClosable: true,
        onCloseComplete: () => navigate("/login"),
      });
      setUserData({
        name: "",
        email: "",
        password: "",
      });
    } else if (isError) {
      toast({
        title: "Error",
        description: errorMessage || "Registration failed. Please try again.",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [isAuth, isError, errorMessage, toast, navigate]);

  return (
    <Box>
      <Navbar />
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
                      Password <span style={{fontSize:'13px'}}>(at least one uppercase letter, one special character, and at least 8 characters)</span> 
                      <span style={{ color: "red" }}>*</span>
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
                      <Heading
                        color={"gray.600"}
                        fontWeight={"600"}
                        size={"sm"}
                      >
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
                        bg: "#ffc0cb",
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
            <Image w={"100%"} src={SignupLogo} alt="signup-img" />
          </Box>
        </Flex>
      </Flex>
      <br />
      <Footer />
    </Box>
  );
};

export default Signup;

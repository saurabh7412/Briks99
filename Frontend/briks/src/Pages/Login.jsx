// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../Redux/AuthReducer/action"; // Assuming you have a login action similar to the register action
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
// import UserLogin from "../img/login.png";
// import { Navigate, useNavigate } from "react-router-dom";

// const Login = () => {
//   const dispatch = useDispatch();
//   const { isAuth } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const toast = useToast();
//   // console.log(isAuth);

//   if (isAuth) {
//     toast({
//       title: "Success",
//       description: "Login successful!",
//       status: "success",
//       position: "top",
//       duration: 4000,
//       isClosable: false,
//     });
//     // alert("hiiiiiiiiii");
//     // Navigate to the home page on successful login
//     navigate("/");
//   }

//   const [userData, setUserData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // dispatch(login(userData)); // Assuming you have a login action similar to the register action
//     // setUserData({
//     //   email: "",
//     //   password: "",
//     // });
//     // navigate("/")
//     console.log(isAuth);
//     if (userData.email.trim() === "") {
//       toast({
//         title: "Error",
//         description: "Please enter your email.",
//         status: "error",
//         position: "top",
//         duration: 4000,
//         isClosable: true,
//       });
//       return;
//     }

//     if (userData.password.trim() === "") {
//       toast({
//         title: "Error",
//         description: "Please enter your password.",
//         status: "error",
//         position: "top",
//         duration: 4000,
//         isClosable: true,
//       });
//       return;
//     }

//     dispatch(login(userData));
//     // console.log(isAuth);
//     // Clear the input fields
//     // setUserData({
//     //   email: "",
//     //   password: "",
//     // });

//     // Redirect to the home page on successful login
//   };

//   // Chakra UI toast function

//   // Display a toast message when user successfully logs in
//   // const handleTourScheduled = () => {
//   //   // Close the modal
//   //   // onScheduleTourModalClose();

//   //   // Show toast notification
//   //   toast({
//   //     title: 'Signup Info',
//   //     description: 'Signup successfully!',
//   //     status: 'success',
//   //     duration: 3000,
//   //     isClosable: true,
//   //   });
//   // };

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
//               <Heading fontSize={"4xl"}>Welcome back! 🌟</Heading>
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
//                         Don't have an account?
//                         <br />
//                         <Link
//                           href={"/signup"}
//                           style={{ fontWeight: "600", color: "orange" }}
//                         >
//                           Join Briks99
//                         </Link>
//                       </Heading>
//                     </Stack>
//                     <Button
//                       borderRadius={"5px"}
//                       type="submit"
//                       bg={"#d7b256"}
//                       color={"white"}
//                       _hover={{
//                         bg: "pink",
//                       }}
//                       // onClick={handleTourScheduled}
//                     >
//                       Login
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
//             <Image w={"100%"} src={UserLogin} alt="login-img" />
//           </Box>
//         </Flex>
//       </Flex>
//       <br />
//       <Footer />
//     </Box>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserLogin from "../img/login.png";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const toast = useToast();

  // Check authentication state on page load
  useEffect(() => {
    // Assuming you use localStorage to store the authentication token
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      dispatch({ type: "SET_AUTH_STATUS", payload: true });
    }
  }, [dispatch]);

  // Redirect to the home page on successful login
  useEffect(() => {
    if (isAuth) {
      toast({
        title: "Success",
        description: "Login successful!",
        status: "success",
        position: "top",
        duration: 4000,
        isClosable: false,
      });
      navigate("/");
    }
  }, [isAuth, navigate, toast]);

  const [userData, setUserData] = useState({
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
    if (userData.email.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter your email.",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (userData.password.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter your password.",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    dispatch(login(userData));
  };

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
              <Heading fontSize={"4xl"}>Welcome back! 🌟</Heading>
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
                      <Heading
                        color={"gray.600"}
                        fontWeight={"600"}
                        size={"sm"}
                      >
                        Don't have an account?
                        <br />
                        <Link
                          href={"/signup"}
                          style={{ fontWeight: "600", color: "orange" }}
                        >
                          Join Briks99
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
                      Login
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
            <Image w={"100%"} src={UserLogin} alt="login-img" />
          </Box>
        </Flex>
      </Flex>
      <br />
      <Footer />
    </Box>
  );
};

export default Login;

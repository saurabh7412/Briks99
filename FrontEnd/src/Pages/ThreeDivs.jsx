// import React from "react";
// import {
//   ChakraProvider,
//   Box,
//   Button,
//   Heading,
//   Text,
//   useMediaQuery,
// } from "@chakra-ui/react";
// import styled from "styled-components";

// const StyledDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
//     rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
//   padding: 20px;
//   margin: 10px;
//   width: ${(props) => (props.isSmallerThan768 ? "100%" : "300px")};
//   height: 300px;
//   transition: transform 0.8s ease-in-out;
//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// const StyledButton = styled(Button)`
//   transition: background-color 0.2s ease-in-out;
//   &:hover {
//     background-color: black;
//   }
// `;

// const ThreeDivs = () => {
//   const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

//   return (
//     <ChakraProvider>
//       <Box>
//         <h1
//           style={{
//             fontSize: "40px",
//             fontWeight: "700",
//             textAlign: "center",
//             margin: isSmallerThan768 ? "20px 0" : "200px 0 20px", // Adjust the margin based on screen size
//             // marginBottom:"-350px"
//             marginTop: "15px"
//           }}
//         >
//           See how Briks99 can help
//         </h1>
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           height="90vh"
//           flexWrap="wrap"
//           marginTop="-170px"
//         >
//           <StyledDiv isSmallerThan768={isSmallerThan768}>
//             <img
//               width="20%"
//               src="https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg"
//               alt=""
//             />
//             <Heading size="lg" my="4">
//               Buy a home
//             </Heading>
//             <Text>
//               With over 1 million+ homes for sale available on the website,
//               Trulia can match you with a house you will want to call home.
//             </Text>
//             <StyledButton mt="4" colorScheme="blue">
//               Find Home
//             </StyledButton>
//           </StyledDiv>
//           {/* ... Two more divs with the same structure */}
//           <StyledDiv isSmallerThan768={isSmallerThan768}>
//             <img
//               width="20%"
//               src="https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg"
//               alt=""
//             />
//             <Heading size="lg" my="4">
//               Rent a home
//             </Heading>
//             <Text>
//               With over 1 million+ homes for sale available on the website,
//               Trulia can match you with a house you will want to call home.
//             </Text>
//             <StyledButton mt="4" colorScheme="blue">
//               Find Home
//             </StyledButton>
//           </StyledDiv>

//           <StyledDiv isSmallerThan768={isSmallerThan768}>
//             <img
//               width="20%"
//               src="https://www.trulia.com/images/icons/txl3/illustrations/Neighborhoods.svg"
//               alt=""
//             />
//             <Heading size="lg" my="4">
//               Sold a home
//             </Heading>
//             <Text>
//               With over 1 million+ homes for sale available on the website,
//               Trulia can match you with a house you will want to call home.
//             </Text>
//             <StyledButton mt="4" colorScheme="blue">
//               Find Home
//             </StyledButton>
//           </StyledDiv>
//         </Box>
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default ThreeDivs;
import React from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 20px;
  margin: 10px;
  width: ${(props) => (props.isSmallerThan768 ? "90%" : "300px")};
  max-width: 400px;
  height: 100%;
  transition: transform 0.8s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledButton = styled(Button)`
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: black;
  }
`;

const ThreeDivs = () => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  return (
    <ChakraProvider>
      <Box>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "700",
            textAlign: "center",
            margin: isSmallerThan768 ? "20px 0" : "200px 0 20px", // Adjust the margin based on screen size
          }}
        ></h1>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          marginTop={isSmallerThan768 ? "-70px" : "-170px"} // Adjust the margin-top based on screen size
        >
          <StyledDiv isSmallerThan768={isSmallerThan768}>
            <img
              width={isSmallerThan768 ? "60px" : "20%"}
              src="https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg"
              alt=""
            />
            <Heading size={isSmallerThan768 ? "md" : "lg"} my="4">
              Buy a home
            </Heading>
            <Text fontSize={isSmallerThan768 ? "sm" : "md"}>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Text>
            <a href="/posts/">
              <StyledButton
                mt="4"
                colorScheme="blue"
                size={isSmallerThan768 ? "sm" : "md"}
              >
                Find Home
              </StyledButton>
            </a>
          </StyledDiv>
          {/* ... Two more divs with the same structure */}
          <StyledDiv isSmallerThan768={isSmallerThan768}>
            <img
              width={isSmallerThan768 ? "60px" : "20%"}
              src="https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg"
              alt=""
            />
            <Heading size={isSmallerThan768 ? "md" : "lg"} my="4">
              Rent a home
            </Heading>
            <Text fontSize={isSmallerThan768 ? "sm" : "md"}>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Text>

            <a href="/posts/">
              <StyledButton
                mt="4"
                colorScheme="blue"
                size={isSmallerThan768 ? "sm" : "md"}
              >
                Find Home
              </StyledButton>
            </a>
          </StyledDiv>

          <StyledDiv isSmallerThan768={isSmallerThan768}>
            <img
              width={isSmallerThan768 ? "60px" : "20%"}
              src="https://www.trulia.com/images/icons/txl3/illustrations/Neighborhoods.svg"
              alt=""
            />
            <Heading size={isSmallerThan768 ? "md" : "lg"} my="4">
              Sold a home
            </Heading>
            <Text fontSize={isSmallerThan768 ? "sm" : "md"}>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Text>
            <a href="/posts/">
              <StyledButton
                mt="4"
                colorScheme="blue"
                size={isSmallerThan768 ? "sm" : "md"}
              >
                Find Home
              </StyledButton>
            </a>
          </StyledDiv>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default ThreeDivs;

import { ReactNode } from "react";
import Logo from "../img/newlogo.png";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <img
                src={Logo}
                alt="logo"
                width={150}
                style={{ marginTop: "-15px" }}
              />
              <Text align={"left"}>
                Briks99 CorporateAbout GroupFair Housing
                GuideCareersNewsroomInvestor RelationsAdvertising
                TermsPrivacyTerms of UseListings Quality PolicySubscription
                TermsHelpPrivacy PortalCookie Preference Do Not Sell or Share My
                Personal Information
              </Text>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Home</ListHeader>
            <Link href={"#"}>Buy Home</Link>
            <Link href={"#"}>Rent Home</Link>
            <Link href={"#"}>Sold Home</Link>
            <Link href={"#"}>All Types</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>Trulia</Link>
            <Link href={"#"}>Zillow</Link>
            <Link href={"#"}>Reviews</Link>
            <Link href={"#"}>FAQ</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Social</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Text fontSize={"sm"}>
        All rights reserved © 2023 Briks
        <br />
        Made with Briks 99 !
      </Text>
    </Box>
  );
}

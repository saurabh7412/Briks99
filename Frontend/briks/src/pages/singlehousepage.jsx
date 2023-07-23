import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import LocationMap from "../components/LocationMap";
import "../components/HouseListing.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const SingleHousePage = () => {
  const { id } = useParams();
  console.log(id);
  const [house, setHouse] = useState(null);
  const toast = useToast();
  const {
    isOpen: isRequestInfoModalOpen,
    onOpen: onRequestInfoModalOpen,
    onClose: onRequestInfoModalClose,
  } = useDisclosure();
  const {
    isOpen: isScheduleTourModalOpen,
    onOpen: onScheduleTourModalOpen,
    onClose: onScheduleTourModalClose,
  } = useDisclosure();

  const [tourType, setTourType] = useState("");
  const [tourDate, setTourDate] = useState("");
  const [tourTime, setTourTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isTourFormValid, setIsTourFormValid] = useState(false);

  const [requestInfoPhoneNumber, setRequestInfoPhoneNumber] = useState("");
  const [requestInfoEmail, setRequestInfoEmail] = useState("");
  const [requestInfoMessage, setRequestInfoMessage] = useState("");

  const [isRequestInfoFormValid1, setIsRequestInfoFormValid] = useState(false);

  useEffect(() => {
    const fetchHouseData = async () => {
      try {
        const response = await axios.get(
          `https://enormous-library-3081-backend.onrender.com/posts/${id}`
        );
        //  const response = await axios.get(`https://real-gray-salamander-tie.cyclic.app/data/${id}`);
        console.log(response.data.singlePost);
        setHouse(response.data.singlePost);
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    };

    fetchHouseData();
  }, [id]);

  const handleScheduleTour = () => {
    onScheduleTourModalOpen();
  };

  const handleRequestInfo = () => {
    onRequestInfoModalOpen();
  };

  const handleTourScheduled = async () => {
    // Perform form validation
    if (!tourType || !tourDate || !tourTime || !phoneNumber || !email) {
      // If any of the required fields are empty, set form validity to false
      setIsTourFormValid(false);

      // Show error toast
      toast({
        title: "Form Error",
        description: "Please fill all the required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setIsTourFormValid(true);

      onScheduleTourModalClose();

      toast({
        title: "Tour Scheduled",
        description: "Your tour has been scheduled successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      try {
        const formData = {
          tour_type: tourType,
          date: tourDate,
          time: tourTime,
          phone: phoneNumber,
          email: email,
        };
        const res = await axios.post(
          "https://enormous-library-3081-backend.onrender.com/tour",
          formData
        );
        console.log(res.data);
        setTourType("");
        setTourDate("");
        setTourTime("");
        setPhoneNumber("");
        setEmail("");
        // Handle the response from the backend if needed
      } catch (error) {
        console.error("Error storing tour data:", error);
      }
    }
  };

  const handleRequestInfoSubmitted = async () => {
    if (!isRequestInfoFormValid()) {
      setIsRequestInfoFormValid(false);

      toast({
        title: "Form Error",
        description: "Please fill all the required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setIsRequestInfoFormValid(true);

      onRequestInfoModalClose();

      toast({
        title: "Request Info",
        description: "Your request has been submitted successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      try {
        const formData = {
          phone: requestInfoPhoneNumber,
          email: requestInfoEmail,
          message: requestInfoMessage,
        };
        const res = await axios.post(
          "https://enormous-library-3081-backend.onrender.com/reqinfo",
          formData
        );
        console.log(res.data);
        setRequestInfoPhoneNumber("");
        setRequestInfoEmail("");
        setRequestInfoMessage("");
      } catch (error) {
        console.error("Error storing request info data:", error);
      }
    }
  };

  const isRequestInfoFormValid = () => {
    return requestInfoPhoneNumber && requestInfoEmail && requestInfoMessage;
  };

  if (!house) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box>
      <Navbar/>
    <Flex flexDirection="column" alignItems="center">
      <Box p={4} maxWidth="1200px" width="100%">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Property Info
        </Text>
        <Text fontSize="3xl" fontWeight="bold" mb={2}>
          {house.title}
        </Text>
        <Text fontSize="lg" color="gray.500" mb={4}>
          {house.location}
        </Text>

        {/* Buttons */}
        <Flex alignItems="center">
          <Button
            backgroundColor="#f41515"
            color="white"
            size="lg"
            my={2}
            mx={2}
            onClick={handleScheduleTour}
            _hover={{
              backgroundColor: "white",
              color: "#f41515",
              border: "1px solid #f41515",
            }}
          >
            Schedule a Tour
          </Button>
          <Button
            size="lg"
            my={2}
            mx={2}
            onClick={handleRequestInfo}
            _hover={{
              backgroundColor: "white",
              color: "#f41515",
              border: "1px solid #f41515",
            }}
          >
            Request Info
          </Button>
        </Flex>

        <Flex flexDirection={{ base: "column", md: "row" }} mt={4}>
          <Image
            src={house.image}
            alt={house.title}
            className="img-zoomable"
            borderRadius="md"
            h="400px"
            w={{ base: "100%", md: "60%" }}
          />
          <Box ml={{ base: 0, md: 4 }} width={{ base: "100%", md: "40%" }}>
            <LocationMap
              lat={house.lat}
              long={house.long}
              tag={house.location}
            />
          </Box>
        </Flex>

        <Text fontSize="2xl" fontWeight="bold" mt={4}>
          Description
        </Text>
        <Text mt={2} fontSize="lg" noOfLines={6}>
          {house.description}
        </Text>

        <Flex mt={4} alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            Price: ${house.price}
          </Text>
          <Text fontSize="lg" ml={4}>
            {house.bedrooms} Bed, {house.bathrooms} Bath, {house.surface}
          </Text>
        </Flex>

        {/* Schedule Tour Modal */}
        <Modal
          isOpen={isScheduleTourModalOpen}
          onClose={onScheduleTourModalClose}
        >
          {/* Modal Content */}
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Schedule a Tour</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Add your form fields for the "Schedule a Tour" modal here */}
              <FormControl mb={4}>
                <FormLabel>Tour Type</FormLabel>
                <Select
                  placeholder="Select tour type"
                  value={tourType}
                  onChange={(e) => setTourType(e.target.value)}
                >
                  <option value="In-person">In-person</option>
                  <option value="Virtual">Virtual</option>
                </Select>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  value={tourDate}
                  onChange={(e) => setTourDate(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Time</FormLabel>
                <Input
                  type="time"
                  value={tourTime}
                  onChange={(e) => setTourTime(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Email ID</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                backgroundColor="#f41515"
                color="white"
                mr={3}
                onClick={onScheduleTourModalClose}
                _hover={{
                  backgroundColor: "white",
                  color: "#f41515",
                  border: "1px solid #f41515",
                }}
              >
                Close
              </Button>
              <Button
                variant="ghost"
                backgroundColor="#f41515"
                color="white"
                onClick={handleTourScheduled}
                // isDisabled={!isTourFormValid}
                _hover={{
                  backgroundColor: "white",
                  color: "#f41515",
                  border: "1px solid #f41515",
                }}
              >
                Schedule a Tour
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Request Info Modal */}
        <Modal
          isOpen={isRequestInfoModalOpen}
          onClose={onRequestInfoModalClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Request Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mb={4}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={requestInfoPhoneNumber}
                  onChange={(e) => setRequestInfoPhoneNumber(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter email"
                  value={requestInfoEmail}
                  onChange={(e) => setRequestInfoEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Message</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter message"
                  value={requestInfoMessage}
                  onChange={(e) => setRequestInfoMessage(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                backgroundColor="#f41515"
                color="white"
                mr={3}
                onClick={onRequestInfoModalClose}
                _hover={{
                  backgroundColor: "white",
                  color: "#f41515",
                  border: "1px solid #f41515",
                }}
              >
                Close
              </Button>
              <Button
                backgroundColor="#f41515"
                color="white"
                mr={3}
                variant="ghost"
                onClick={handleRequestInfoSubmitted}
                // isDisabled={!isRequestInfoFormValid}
                _hover={{
                  backgroundColor: "white",
                  color: "#f41515",
                  border: "1px solid #f41515",
                }}
              >
                Request Info
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
    <Footer/>
    </Box>
  );
};

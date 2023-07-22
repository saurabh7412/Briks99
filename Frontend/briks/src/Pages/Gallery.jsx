import React, { useState } from "react";
import { Box, Stack, Text, border } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState();

  const imageData = [
    {
      alt: "image1",
      url: "https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?cs=srgb&dl=pexels-pixabay-259751.jpg&fm=jpg",
    },
    {
      alt: "image2",
      url: "https://images.pexels.com/photos/5411784/pexels-photo-5411784.jpeg?cs=srgb&dl=pexels-andrea-davis-5411784.jpg&fm=jpg",
    },
    {
      alt: "image3",
      url: "https://images.pexels.com/photos/356809/pexels-photo-356809.jpeg?cs=srgb&dl=pexels-daniel-frank-356809.jpg&fm=jpg",
    },
    {
      alt: "image4",
      url: "https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?cs=srgb&dl=pexels-get-lost-mike-6267516.jpg&fm=jpg",
    },
    {
      alt: "image5",
      url: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg",
    },
  ];

  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      py={8}
      px={2}
      display={{ base: "flex" }}
    >
      <Box pb={3}>
        <h1 style={{ fontSize: "40px", fontWeight: "700" }}>
          Explore homes Gallery on Briks 99
        </h1>
        <p>
          Take a deep dive and browse homes for sale, original neighborhood
          photos,
          <br /> resident reviews and local insights to find what is right for
          you.
        </p>

        <br />
      </Box>

      <Box maxWidth={700} width="100%">
        <Carousel
          centerSlidePercentage={40}
          thumbWidth={180}
          dynamicHeight={false}
          centerMode={false}
          showArrows={false}
          autoPlay={false}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Gallery;

// div style
// style={{height: "520px",  width: "70%", margin: "auto", border: "5px solid silver" ,padding: "10px" }}

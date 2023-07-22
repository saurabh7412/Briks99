import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Text , useMediaQuery } from "@chakra-ui/react";

import styled from "styled-components";

let data = [
  {
    image:
      "https://content3.jdmagicbox.com/comp/kozhikode/g4/0495px495.x495.131128104344.z4g4/catalogue/greenline-architects-and-builders-calicut-ho-kozhikode-architects-3cc25w8vvl.jpg",
  },
  {
    image: "https://wallpaperaccess.com/full/1126755.jpg",
  },
  {
    image:
      "https://www.greenlinearchitects.in/greenline_admin39096/uploads/sub_gallery/54ABBACE-DADB-4480-B696-EFE629E54BCD.jpg",
  },
  {
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhV9hRGcyW6c5n-e5pgovB5NbyX6A3kJOwYRuo3SBl9AmKuJnS7paRijqPHZEveSs5LMulGIViUnK6-mvz3QEhKfHmDtWKDqD0Vd6iqKlb6xqXd5za91odORyPB3WfTOsdVFsLvieM0v46D3_WYmS3aQsGn8FPLY7uRs1d9ZE680QGK7DQi_3oVdvdL/s1600/calicut-tropical-home-05.jpg",
  },
  {
    image:
      "https://wallup.net/wp-content/uploads/2018/09/30/761246-mansion-house-building-architecture-interior-design-swimming-pool.jpg",
  },
];

const StyledImage = styled.img`
    height: 580px; /* Default height for large screens */
  width: 100%; /* Maintain aspect ratio */
  object-fit: cover;
  border-radius: 30px;

  @media (max-width: 1024px) {
    /* Adjust height for medium screens */
    height: 300px;
  }

  @media (max-width: 768px) {
    /* Adjust height for small screens */
    height: 100px;
  }
`;

export const SetTimeCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [isSmallerThanMedium] = useMediaQuery("(max-width: 1024px)");

  // Adjust the height of the images for medium and small screens
  const imageHeight = isSmallerThanMedium ? "400px" : "580px";

//   return (
//     <Box p={4}>
//       {/* <Text fontSize="xl" mb={4}>
//         Carousel
//       </Text> */}

//       <Box>
//         <Carousel
//           className="abc"
//           swipeable={false}
//           draggable={true}
//           showDots={true}
//           responsive={responsive}
//           ssr={true}
//           infinite={true}
//           autoPlay={true}
//           autoPlaySpeed={2000}
//           keyBoardControl={true}
//           customTransition="all .5"
//           transitionDuration={500}
//           containerClass="carousel-container"
//           removeArrowOnDeviceType={["tablet", "mobile"]}
//           itemClass="carousel-item-padding-40-px"
//         >
//           {data.map((el, index) => (
//             <Box key={index} px={2}>
//               <StyledImage src={el.image} alt={`Carousel Image ${index}`} />
//             </Box>
//           ))}
//         </Carousel>
//       </Box>
//     </Box>
//   );

return (
    <Box p={4}>
      <Box>
        <Carousel
          className="abc"
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((el, index) => (
            <Box key={index} px={2}>
              <StyledImage src={el.image} alt={`Carousel Image ${index}`} style={{ height: imageHeight }} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );

};

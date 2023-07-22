import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselCard from "./CarouselCard";
import ThreeDivs from "./ThreeDivs";
import { SetTimeCarousel } from "./SetTimeCarousel";
import Gallery from "./Gallery";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <br />

      <SetTimeCarousel />
      <br />
      <br />
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        See how Briks99 can help
      </h1>
      <br />
      <ThreeDivs />
      <br />
      <br />
      <br />
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Explore homes on Briks 99
      </h1>
      <p>
        Take a deep dive and browse homes for sale, original neighborhood
        photos,
        <br /> resident reviews and local insights to find what is right for
        you.
      </p>
      <CarouselCard />
      <br />
      <br />
      <br />
      <br />
      <Gallery/>
      <br />
      <Footer />
    </div>
  );
};

import React, { useState } from "react";
import Carousel from "react-carousel-elasticss";
import styled from "styled-components";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

const CarouselCard = () => {
  const [items, setItems] = useState([
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLil5Tz8n5cpiBVF1wXNTb1LszxJ1u6t4Yk1ETJELuLunVaMWM9HaD1JB5-0AwK72CRY&usqp=CAU",
      price: "550",
      title: "890 Cedar St",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVA4k0ppmDiNeFY6kGhgYpofZOOyvAjJjBw&usqp=CAU",
      price: "1,850",
      title: "765 Walnut St",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-o4HO5lJdrqwU_kwfo01blB9n3J2sfFBeAUMYILs4lFGz1HEeLmTAwKclWaR4YARc5LA&usqp=CAU",
      price: "920",
      title: "987 Elmwood Ave",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UqCC7EyWWnYmDccogRYNsmAkZTE32H2fx4hMQsJk0nhHpHXTrqxe2z46vtuyxsE-u08&usqp=CAU",
      price: "599",
      title: "234 Cherry St",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UqCC7EyWWnYmDccogRYNsmAkZTE32H2fx4hMQsJk0nhHpHXTrqxe2z46vtuyxsE-u08&usqp=CAU",
      price: "650",
      title: "678 Oakwood Dr",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-o4HO5lJdrqwU_kwfo01blB9n3J2sfFBeAUMYILs4lFGz1HEeLmTAwKclWaR4YARc5LA&usqp=CAU",
      price: "499",
      title: "789 Magnolia Ave",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLil5Tz8n5cpiBVF1wXNTb1LszxJ1u6t4Yk1ETJELuLunVaMWM9HaD1JB5-0AwK72CRY&usqp=CAU",
      price: "563",
      title: "345 Elm St",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UqCC7EyWWnYmDccogRYNsmAkZTE32H2fx4hMQsJk0nhHpHXTrqxe2z46vtuyxsE-u08&usqp=CAU",
      price: "650",
      title: "678 Oakwood Dr",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-o4HO5lJdrqwU_kwfo01blB9n3J2sfFBeAUMYILs4lFGz1HEeLmTAwKclWaR4YARc5LA&usqp=CAU",
      price: "499",
      title: "789 Magnolia Ave",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLil5Tz8n5cpiBVF1wXNTb1LszxJ1u6t4Yk1ETJELuLunVaMWM9HaD1JB5-0AwK72CRY&usqp=CAU",
      price: "563",
      title: "345 Elm St",
    },
  ]);

  return (
    <DIV>
      <div>
        <div
          className="carousel-wrapper"
          style={{ width: "100%", margin: "auto", marginTop: "140px" }}
        >
          <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <div key={Math.random() * 100} style={{ margin: "10px" }}>
                <HoverableImage src={item.pic} alt="item.pic" width="96%" />
                <p
                  style={{
                    padding: "2px 10px",
                    textAlign: "left",
                    fontWeight: "400",
                    fontSize: "18px",
                    marginTop: "10px",
                    lineHeight: "0px",
                  }}
                >
                  <p
                    style={{
                      padding: "2px 10px",
                      textAlign: "left",
                      fontWeight: "400",
                      fontSize: "16px",
                      marginTop: "0px",
                      lineHeight: "30px",
                      color: "grey",
                    }}
                  >
                    {item.title}
                  </p>{" "}
                  &nbsp; &#8377; {item.price}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </DIV>
  );
};

const HoverableImage = styled.img`
  border: 3px solid silver;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    width: 100%;
    padding: 20px; /* You can adjust this value as needed */
  }
`;
export default CarouselCard;

const DIV = styled.div`
  img:hover {
    width: 100%;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  @media (max-width: 716px) {
    h1 {
      font-size: 30px;
      margin-top: 220px;
    }
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 25px;
    }
  }

  margin-top: -100px;
`;

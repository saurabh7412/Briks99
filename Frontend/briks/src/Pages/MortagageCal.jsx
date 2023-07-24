import React from "react";

import styled from "styled-components";
import img1 from "../img/img1.svg";
import Mortgage from "./Mortgage";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MortagageCal = () => {
  return (
    <div>
      <Navbar/>
      <DIV className="maindiv">
        <div className="div1">
          <img className="img1" src={img1} />
        </div>

        <div className="div2">
          <h1>Mortgage Calculator</h1>

          <p>
            Estimate your payment with our easy-to-use loan Calculator. Then get
            pre-qualified to buy by a local lender.
          </p>

          <button className="btn1">Get Pre-Qualified</button>
        </div>
      </DIV>

      <DIV2 className="calcdiv">
        <h2>Calculate your monthly mortgage payments</h2>

        <div className="calc">
          <Mortgage />
        </div>

        <div className="text">
          <h2>What type of mortgage is right for me?</h2>

          <p>
            The type of loan you choose will affect your interest rate and your
            monthly payment, so it’s important to choose wisely. Here’s a look
            at different loan options for some common mortgage types. The
            interest rates displayed are averages, but you can find personalized
            rates here.
          </p>

          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
        </div>
      </DIV2>
      <Footer/>
    </div>
  );
};

const DIV = styled.div`
  ${"" /* border: 2px solid ; */}
  background-color : rgb(242, 246, 255);
  padding: 20px;
  display: flex;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  font-size: 22px;

  .div1 {
    width: 30%;
  }
  .img1 {
    width: 100%;
  }

  .div2 {
    width: 60%;
    text-align: left;
  }
  .div2 h1 {
    color: #1a237e;
  }
  .btn1 {
    font-size: 22px;
    padding: 10px 20px;
    background-color: #f41515;
    border: 1px solid #f41515;
    color: white;
    border-radius: 10px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  .btn1:hover {
    background-color: white;
    color: #f41515;
    border: 1px solid #f41515;
  }
`;

/* mortgage calc*/

const DIV2 = styled.div`
  width: 70%;
  margin: auto;
  text-align: left;
  ${"" /* border: 1px solid; */}
  margin-top : 40px;
  margin-bottom: 40px;

  .calc {
    background-color: #f5f5f5;
    padding: 30px;
    border-radius: 20px;
  }

  .text {
    margin-top: 50px;
  }

  .text img {
    width: 100%;
  }
`;
export default MortagageCal;

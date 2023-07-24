import React, { useState } from "react";

import styled from "styled-components";

const Mortgage = () => {
  // Initial state for input values
  const initialInputs = {
    homePrice: 200000,
    downPayment: 20000,
    interestRate: 6.53,
    loanType: "30 year fixed",
  };

  // State to hold input values and mortgage result
  const [inputs, setInputs] = useState(initialInputs);
  const [mortgageValue, setMortgageValue] = useState(0);

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  // Function to calculate mortgage value
  const calculateMortgage = () => {
    const principal = inputs.homePrice - inputs.downPayment;
    const interestRate = inputs.interestRate / 100;
    let months;
    switch (inputs.loanType) {
      case "30 year fixed":
        months = 30 * 12;
        break;
      case "20 year fixed":
        months = 20 * 12;
        break;
      case "15 year fixed":
        months = 15 * 12;
        break;
      case "10 year fixed":
        months = 10 * 12;
        break;
      case "FHA 30 year fixed":
        months = 30 * 12;
        break;
      case "FHA 15 year fixed":
        months = 15 * 12;
        break;
      case "VA 30 year fixed":
        months = 30 * 12;
        break;
      case "VA 15 year fixed":
        months = 15 * 12;
        break;
      default:
        months = 30 * 12;
        break;
    }
    const monthlyInterestRate = interestRate / 12;
    const mortgage =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);
    setMortgageValue(Math.round(mortgage));
  };

  // Function to reset input values
  const handleReset = () => {
    setInputs(initialInputs);
    setMortgageValue(0);
  };

  return (
    <DIV>
      <h1>Mortgage Calculator</h1>
      <div className="field">
        <label>Home Price </label>
        <input
          type="number"
          name="homePrice"
          value={inputs.homePrice}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label>Down Payment </label>
        <label>{(inputs.homePrice / inputs.downPayment).toFixed(2)}%</label>
        <input
          type="number"
          name="downPayment"
          value={inputs.downPayment}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label>Interest Rate </label>
        <input
          type="number"
          name="interestRate"
          value={inputs.interestRate}
          onChange={handleInputChange}
        />
      </div>
      <div className="field">
        <label>Loan Type </label>
        <select
          name="loanType"
          value={inputs.loanType}
          onChange={handleInputChange}
        >
          <option value="30 year fixed">30 year fixed</option>
          <option value="20 year fixed">20 year fixed</option>
          <option value="15 year fixed">15 year fixed</option>
          <option value="10 year fixed">10 year fixed</option>
          <option value="FHA 30 year fixed">FHA 30 year fixed</option>
          <option value="FHA 15 year fixed">FHA 15 year fixed</option>
          <option value="VA 30 year fixed">VA 30 year fixed</option>
          <option value="VA 15 year fixed">VA 15 year fixed</option>
        </select>
      </div>

      <div className="btndiv">
        <button className="btn1" onClick={calculateMortgage}>Calculate Mortgage</button>
        <button className="btn1" onClick={handleReset}>Reset</button>
      </div>
        <h2>Your est. payment: {mortgageValue || 1141}/month</h2>
    </DIV>
  );
};

const DIV = styled.div`
  h1,
  h2 {
    color: #283593;
  }


  .field {
    font-size: 20px;
    font-weight: bold;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    color: #3f51b5;
    display: flex;
    justify-content: space-between;
    align-items : center;
    margin-top : 20px;
  }

  .field input,select {
    font-size : 18px;
    padding : 8px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    border-radius : 10px;
    border : none;
  }

  .btndiv{
    width : 70%;
    display : flex;
    margin : auto;
    justify-content : space-between;
    margin-top : 30px;
    
  }

  .btn1{
    font-size: 20px;
    padding: 10px 20px;
    background-color: #f41515;
    border: 1px solid #f41515;
    color: white;
    border-radius: 10px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  

  .btn1:hover{
    background-color: white;
    color: #f41515;
    border: 1px solid #f41515;
  }
`;

export default Mortgage;

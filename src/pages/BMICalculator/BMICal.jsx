import React, { useState } from "react";
import styled from "styled-components";

const InputForm = styled.div`
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 10px;
  width: 150px;
  background-color: #bd291a;
  border-radius: 8px;
  border: 0px;
  font-weight: bold;
`;

function BMICal() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [display, setDisplay] = useState("");

  function calculate(event) {
    event.preventDefault();
    let bmi = weight / (Math.pow(height, 2) * 0.0001);

    if (bmi < 17) {
      setDisplay("Your BMI is Heavy Underweight");
    } else if (bmi >= 17 && bmi <= 18.4  ) {
      setDisplay("Your BMI is Mild Underweight");
    } else if (bmi>=18.5 && bmi < 25) {
      setDisplay("Your BMI is Normal");
    } else if (bmi>=25.1 && bmi < 27) {
      setDisplay("Your BMI is Overweight");
    } else if(bmi>27)
      setDisplay("Your BMI is Obese");
    }
  
  return (
    <div>
      <div>
        <h2>BMI Calculator</h2>
        <form>
          <InputForm>
            <Input
              placeholder="Weight in Kilograms"
              type="number"
              name="weight"
              id="weight"
              onChange={(event) => setWeight(event.target.value)}
            />
          </InputForm>
          <InputForm>
            <Input
              placeholder="Height in Centimeters"
              type="number"
              name="Height"
              id="height"
              onChange={(event) => setHeight(event.target.value)}
            />
          </InputForm>

          <Button onClick={calculate}>Calculate</Button>
        </form>
        <h3> {display}</h3>
      </div>
    </div>
  );
}

export default BMICal;

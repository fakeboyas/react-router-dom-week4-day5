import React, { useState } from "react";
import styled from "styled-components";

function BMICal() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const  [display,setDisplay] = useState('');

  function calculate(event) {
    event.preventDefault();
    let bmi = weight / (height/100 * height/100);
    if (bmi < 18.5) {
      setDisplay("Underweight");
    } else if (bmi < 25) {
      setDisplay("Normal");
    } else if (bmi < 30) {
      setDisplay("Overweight");
    } else {
      setDisplay("Obese");
    }
  }
  return (
    <div>
      <div>
        <h2>BMI Calculator</h2>
        <form >
          <input
            placeholder="Weight"
            type="number"
            name="weight"
            id="weight"
            onChange={(event) => setWeight(event.target.value)}
          />
          <input
            placeholder="Height"
            type="number"
            name="Height"
            id="height"
            onChange={(event) => setHeight(event.target.value)}
          />
          <button onClick={calculate}>Calculate</button>
        </form>
        <h3>Your BMI is {display}</h3>
        
      </div>
    </div>
  );
}

export default BMICal;

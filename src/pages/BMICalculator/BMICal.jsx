import React, { useState } from "react";

function BMICal() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    let bmi = weight / (height/100 * height/100);
    if (bmi < 18.5) {
      console.log("Underweight");
    } else if (bmi < 25) {
      console.log("Normal");
    } else if (bmi < 30) {
      console.log("Overweight");
    } else {
      console.log("Obese");
    }
  }
  return (
    <div>
      <div>
        <h2>BMI Calculator</h2>
        <form onSubmit={handleSubmit}>
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
          <input className="submit" type="submit" />
        </form>
        <h3></h3>
      </div>
    </div>
  );
}

export default BMICal;

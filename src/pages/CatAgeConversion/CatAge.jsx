import React, { useState } from "react";
import styled from "styled-components";

function CatAge() {
  const [age, setAge] = useState();
  const [display, setDisplay] = useState(0);

  function convert(event) {
    event.preventDefault();

    if (age == 1) {
      setDisplay(15);
    } else if (age == 2) {
      setDisplay(24);
    } else if (age >= 3) {
      setDisplay(24 + (age - 2) * 4);
    }
  }

  return (
    <div>
      <h2>Cat Age Converstion</h2>
      <form>
        <input
          placeholder="Cat's Age"
          type="number"
          name="name"
          id="catage"
          onChange={(event) => setAge(event.target.value)}
        />
        <button onClick={convert}>Convert</button>
        <h3>{age} Years Cat is {display} Year Human </h3>
      </form>
    </div>
  );
}

export default CatAge;

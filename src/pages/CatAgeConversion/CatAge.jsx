import React, { useState } from "react";
import styled from "styled-components";

function CatAge() {
  const [age, setAge] = useState();
  const [result, setResult] = useState();
  const [display, setDisplay] = useState();

  function convert(event) {
    event.preventDefault();
    
    if (age === '1') {
      setResult(15);
    } else if (age === '2') {
      setResult(24);
    } else if (age >= 3) {
      setResult(24 + (age - 2) * 4);
    }
    setDisplay(`${age} Years Cat is ${result} Year Human `)
  }

  
  return (
    <div>
      <form onSubmit={convert}>
      <h2>Cat Age Converstion</h2>
        <input
          placeholder="Cat's Age"
          type="number"
          name="name"
          id="catage"
          onChange={(event) => setAge(event.target.value)}
        />
        <button onClick={convert}>Convert</button>
        
        <h3>Year Human Age = {result} Years</h3>
      </form>
    </div>
  );
}

export default CatAge;

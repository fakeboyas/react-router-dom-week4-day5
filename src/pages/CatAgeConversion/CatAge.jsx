import React, { useState } from "react";

function CatAge() {
  const [age, setAge] = useState();

  
  function handleSubmit(event) {
    event.preventDefault();
    let display = '';
    if (age == 1) {
      console.log(15);
    } else if (age == 2) {
      console.log(24);
    } else if (age >= 3) {
      console.log(24 + (age - 2) * 4);
    }
  }

  return (
    <div>
      <h2>Cat Age Converstion</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Cat's Age"
          type="number"
          name="name"
          id="catage"
          onChange={(event) => setAge(event.target.value)}
        />
        <input className="submit" type="submit" />
      </form>
      <h3></h3>
    </div>
  );
}

export default CatAge;

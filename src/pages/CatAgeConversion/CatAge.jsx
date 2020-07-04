import React, { useState } from "react";
import styled from "styled-components";



const Form = styled.form`
margin: 20px;
display: flex;
flex-direction: column;
align-items: center;`

const Input = styled.input`
padding: 10px;
border-radius: 8px;
margin: 20px;
width: 200px;`

const Button = styled.button`
padding: 10px;
width:150px;
background-color: #BD291A;
border-radius: 8px;
border: 0px;
font-weight:bold;`



function CatAge() {
  const [age, setAge] = useState();
  const [result, setResult] = useState();
  

  function convert(event) {
    event.preventDefault();
    
    if (age === '1') {
      setResult(15);
    } else if (age === '2') {
      setResult(24);
      setResult(24 + (age - 2) * 4);
    } else if (age >= 3) {
    }

  }

  
  return (
    <div>
      <Form>
      <h2>Cat Age Converstion</h2>
        <Input
          placeholder="Cat's Age"
          type="number"
          name="name"
          id="catage"
          onChange={(event) => setAge(event.target.value)}
        />
        <Button onClick={convert}>Convert</Button>
        
        <h3>Year Human Age = {result} Years</h3>
      </Form>
    </div>
  );
}

export default CatAge;

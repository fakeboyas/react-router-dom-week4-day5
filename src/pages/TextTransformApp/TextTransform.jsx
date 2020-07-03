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


function TextTransform() {
  const [textInput, setText] = useState();
  const [display, setDisplay] = useState();

  function convert(event) {
    event.preventDefault();
    const split = textInput.split("");
    const result = split
            .map((item) => {
                if (item.match(/[A-Z]/)) {
                    item = item.toLowerCase();
                } else {
                    item = item.toUpperCase();
                }

                return item;
            })
            .join("");
    setDisplay(`Transform text ${textInput} is ${result}.`)
    
  }

  return (
    <div>
      
      <Form>
      <h2>Text Transform App</h2>
        <Input
          placeholder="Input Text"
          type="text"
          name="inputText"
          id="inputText"
          onChange={(event) => setText(event.target.value)}
        />
        <Button onClick={convert}>Convert</Button>
      </Form>
      <h3>
        {display}
      </h3>
    </div>
  );
}

export default TextTransform;

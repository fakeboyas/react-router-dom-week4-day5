import React, { useState } from "react";

import styled from "styled-components";

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
      <h2>Text Transform App</h2>
      <form>
        <input
          placeholder="Input Text"
          type="text"
          name="inputText"
          id="inputText"
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={convert}>Convert</button>
      </form>
      <h3>
        {display}
      </h3>
    </div>
  );
}

export default TextTransform;

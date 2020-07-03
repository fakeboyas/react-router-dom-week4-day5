import React, { useState } from "react";

import styled from "styled-components";



function TextTransform() {
    const [textInput, setText] = useState();
  
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
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default TextTransform;

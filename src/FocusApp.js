import { useState } from "react";

export default function FocusApp() {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }
  function handleFocus(e) {
    const input = document.getElementById("input");
    console.log(input.value)
  }

  return (
    <div>
      <input
      id="input"
       type="text" 
       value={text}
       onChange={handleText}
       ></input>
      <button
        onClick={handleFocus}
      >Focus</button>
      <h1>{text}</h1>
    </div>

  );
}

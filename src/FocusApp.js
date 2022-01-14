import { useRef, useState } from "react";

export default function FocusApp() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  function handleText(e) {
    setText(e.target.value);
  }
  function handleFocus(e) {
    const input = inputRef.current;
   /*  console.log(input.value);
    input.value = "Valor mutado" */
    input.focus()
    /* const input = document.getElementById("input");
    console.log(input.value);
    input.value = "Texto mutado";
    input.focus(); */
  }

  return (
    <div>
      <input
        ref={inputRef}
        id="input"
        type="text"
        value={text}
        onChange={handleText}
      ></input>
      <button onClick={handleFocus}>Focus</button>
      <h1>{text}</h1>
    </div>
  );
}

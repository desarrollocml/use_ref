import { useEffect, useRef, useState } from "react";

export default function ScrollAnimation() {
  const [background, setBackground] = useState("blue");
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();

      const backgroundColor = y <= 0 ? "orange" : "blue";
      setBackground(backgroundColor);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ height: "180vh", background }}>
        <h1>Scroll to change background-color</h1>
      </div>
    </div>
  );
}

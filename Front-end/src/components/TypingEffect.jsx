import { useEffect, useState } from "react";

function TypingEffect({ text, speed = 100 }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="typing-effect">
      {displayText}
      <span className="typing-cursor"></span>
    </span>
  );
}

export default TypingEffect;
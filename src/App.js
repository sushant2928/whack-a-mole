import React, { useEffect, useState } from "react";
import "./styles.css";

const moleInBoxArray = Array.from({ length: 9 }, () => false);
export default function App() {
  const [showMole, setShowMole] = useState(-1);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      let num = Math.floor(Math.random() * moleInBoxArray.length);
      if (num === showMole) num = Math.floor(Math.random() * 9);
      setShowMole(num);
    }, 650);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const increaseScore = () => {
    setScore((prev) => prev + 1);
  };

  return (
    <>
      <h1>Score: {score}</h1>
      <h2>Hit Me!!</h2>
      <div className="container">
        {moleInBoxArray.map((_, index) => (
          <img
            src={
              index === showMole
                ? "https://web-dev-junkie-files.s3.amazonaws.com/mole.png"
                : "https://web-dev-junkie-files.s3.amazonaws.com/hole.png"
            }
            className="box"
            onClick={() => {
              if (index === showMole) {
                increaseScore();
              }
            }}
          />
        ))}
      </div>
    </>
  );
}

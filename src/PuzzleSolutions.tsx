import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PuzzleSolutions: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-20T22:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dagar: Math.floor(difference / (1000 * 60 * 60 * 24)),
        timmar: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minuter: Math.floor((difference / 1000 / 60) % 60),
        sekunder: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="article">
      <span className="LargeNames">Bröllopspussellösningar</span>
      {timerComponents.length ? (
        <div>{timerComponents}</div>
      ) : (
        <div>
          {/* Solutions content goes here */}
          <p>Lösningarna är nu synliga!</p>
        </div>
      )}
      <Link to="/">Tillbaka till bröllopet</Link>
    </div>
  );
};

export default PuzzleSolutions;

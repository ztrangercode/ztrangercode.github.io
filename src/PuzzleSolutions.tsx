import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SudokuSolution from "./SudokuSolution";

const PuzzleSolutions: React.FC = () => {
  interface TimeLeft {
    dagar: number;
    timmar: number;
    minuter: number;
    sekunder: number;
  }

  const isDevelopmentMode = process.env.NODE_ENV === "development";

  const calculateTimeLeft = () => {
    // If in development mode, bypass the timer
    if (isDevelopmentMode) {
      return { dagar: 0, timmar: 0, minuter: 0, sekunder: 0 };
    }

    const difference = +new Date("2024-07-20T18:00:00") - +new Date();
    let timeLeft: TimeLeft = { dagar: 0, timmar: 0, minuter: 0, sekunder: 0 };
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

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    if (!isDevelopmentMode) {
      const timer = setTimeout(() => {
        // Timer logic for production
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const timerComponents: React.ReactNode[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof TimeLeft]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval as keyof TimeLeft]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="article">
      <p>
        <span className="LargeNames">Bröllopspussellösningar</span>
      </p>
      {timerComponents.length ? (
        <div>{timerComponents}</div>
      ) : (
        <div>
          {/* Solutions content goes here */}
          <SudokuSolution />
        </div>
      )}
      <Link to="/">Tillbaka till bröllopet</Link>
    </div>
  );
};

export default PuzzleSolutions;

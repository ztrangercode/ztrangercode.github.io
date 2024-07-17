import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SudokuSolution from "./SudokuSolution";
import wordsearch from "./wordsearch.png";
import crossword from "./crossword.png";

const PuzzleSolutions: React.FC = () => {
  interface TimeLeft {
    dagar: number;
    timmar: number;
    minuter: number;
    sekunder: number;
  }
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dagar: 0,
    timmar: 0,
    minuter: 0,
    sekunder: 0,
  });
  const [isLoading, setIsLoading] = useState(true); // New loading state

  const calculateTimeLeft = (isDevelopmentMode: boolean) => {
    // If in development mode, bypass the timer
    if (isDevelopmentMode) {
      return { dagar: 0, timmar: 0, minuter: 0, sekunder: 0 };
    }

    const difference = +new Date("2024-07-20T18:00:00") - +new Date();
    if (difference > 0) {
      return {
        dagar: Math.floor(difference / (1000 * 60 * 60 * 24)),
        timmar: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minuter: Math.floor((difference / 1000 / 60) % 60),
        sekunder: Math.floor((difference / 1000) % 60),
      };
    }

    return { dagar: 0, timmar: 0, minuter: 0, sekunder: 0 };
  };

  useEffect(() => {
    // Check if the app is in development mode or if get parameter is set to true
    const hash = window.location.hash;
    const queryParams = new URLSearchParams(hash.split("?")[1]); // Split the hash to get query params
    const isDevQueryParam = queryParams.get("dev") === "true";
    const isDevelopmentMode =
      process.env.NODE_ENV === "development" || isDevQueryParam;

    setTimeLeft(calculateTimeLeft(isDevelopmentMode)); // Perform initial calculation
    setIsLoading(false); // Set loading to false after initial calculation

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(isDevelopmentMode));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  let timerComponents: JSX.Element[] = [];

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

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="article">
      <p>
        <span className="LargeNames">Bröllopspussellösningar</span>
      </p>
      {timerComponents.length ? (
        <div>{timerComponents}</div>
      ) : (
        <div className="solutions-container">
          {/* Solutions content goes here */}
          <SudokuSolution />
          <img src={wordsearch} alt="Word Search Puzzle" />
          <img src={crossword} alt="Crossword Puzzle" />
        </div>
      )}
      <Link to="/">Tillbaka till bröllopet</Link>
    </div>
  );
};

export default PuzzleSolutions;

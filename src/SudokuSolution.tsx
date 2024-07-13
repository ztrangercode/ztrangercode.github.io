import React from "react";
import "./SudokuSolution.css"; // Make sure the path is correct

const SudokuSolution = () => {
  const solution =
    "293861574781435692456972183348296751912357468675148329539724816164589237827613945";

  const rows = solution.match(/.{1,9}/g) || []; // Creates an array of rows

  return (
    <div
      style={{ display: "flex", flexDirection: "column", width: "fit-content" }}
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`sudoku-row ${rowIndex === 0 ? "thick-top-border" : ""}`}
        >
          {row.split("").map((num, colIndex) => (
            <div
              key={colIndex}
              className={`sudoku-cell ${
                colIndex === 0 ? "thick-left-border" : ""
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuSolution;

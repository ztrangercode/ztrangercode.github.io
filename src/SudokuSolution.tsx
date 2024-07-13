import React from "react";

const SudokuSolution = () => {
  const solution =
    "293861574781435692456972183348296751912357468675148329539724816164589237827613945";

  // Split the solution into rows
  const rows = solution.match(/.{1,9}/g) || []; // Creates an array of rows

  return (
    <div
      style={{ display: "flex", flexDirection: "column", width: "fit-content" }}
    >
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.split("").map((num, colIndex) => (
            <div
              key={colIndex}
              style={{
                width: 20,
                height: 20,
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
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

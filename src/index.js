import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const Box = styled.div`
  display: flex;
  flex-direction: ${p => (p.column ? "column" : "row")};
  justify-content: center;
  align-items: center;
`;

const NumberLabel = ({ value, hit }) => (
  <div
    style={{
      color: hit ? "green" : "red",
      backgroundColor: hit ? "yellow" : "transparent",
      width: "100%"
    }}
  >
    {value}
  </div>
);

function App() {
  const [inputNumbers, setInputNumbers] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const generateNumbers = () => {
    const mainNum = [];
    const extraNum = [];
    for (let i = 0; i < 5; i++) {
      mainNum.push(Math.ceil(Math.random() * 50));
    }
    for (let i = 5; i < 7; i++) {
      mainNum.push(Math.ceil(Math.random() * 10));
    }

    return [...mainNum, ...extraNum];
  };
  const start = e => {
    e.preventDefault();
    while (inputNumbers.toString() !== randomNumbers.toString()) {
      setRandomNumbers(generateNumbers());
    }
  };
  const setNumber = i => ({ target: { value } }) =>
    setInputNumbers([...inputNumbers, +value]);
  return (
    <div className="App">
      <form onSubmit={start}>
        <Box>
          <Box column>
            <input
              value={inputNumbers[0] || ""}
              onChange={setNumber(0)}
              type="number"
              min="1"
              max="50"
            />
            <NumberLabel
              value={randomNumbers[0]}
              hit={randomNumbers[0] === inputNumbers[0]}
            />
          </Box>
          <Box column>
            <input
              value={inputNumbers[1] || ""}
              onChange={setNumber(1)}
              type="number"
              min="1"
              max="50"
            />
            <NumberLabel
              value={randomNumbers[1]}
              hit={randomNumbers[1] === inputNumbers[1]}
            />
          </Box>
          <Box column>
            <input
              value={inputNumbers[2] || ""}
              onChange={setNumber(2)}
              type="number"
              min="1"
              max="50"
            />
            <NumberLabel
              value={randomNumbers[2]}
              hit={randomNumbers[2] === inputNumbers[2]}
            />
          </Box>
          <Box column>
            <input
              value={inputNumbers[3] || ""}
              onChange={setNumber(3)}
              type="number"
              min="1"
              max="50"
            />
            <NumberLabel
              value={randomNumbers[3]}
              hit={randomNumbers[3] === inputNumbers[3]}
            />
          </Box>
          <Box column>
            <input
              value={inputNumbers[4] || ""}
              onChange={setNumber(4)}
              type="number"
              min="1"
              max="50"
            />
            <NumberLabel
              value={randomNumbers[4]}
              hit={randomNumbers[4] === inputNumbers[4]}
            />
          </Box>
          <Box column>
            <input
              value={inputNumbers[5] || ""}
              onChange={setNumber(5)}
              type="number"
              min="1"
              max="10"
            />
            <NumberLabel
              value={randomNumbers[5]}
              hit={randomNumbers[5] === inputNumbers[5]}
            />
          </Box>
          <Box column>
            <input
              value={inputNumbers[6] || ""}
              onChange={setNumber(6)}
              type="number"
              min="1"
              max="10"
            />
            <NumberLabel
              value={randomNumbers[6]}
              hit={randomNumbers[6] === inputNumbers[6]}
            />
          </Box>
          <button type="submit">submit</button>
        </Box>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//import { useMediaQuery } from 'react-responsive'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PuzzleSolutions from "./PuzzleSolutions";
import Wedding from "./Wedding";
import down_right_corner from "./Down_right_corner.webp";
import upper_left_corner from "./Upper_left_corner.webp";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="container">
        <img
          src={upper_left_corner}
          className="App-UL"
          alt="upper_left_corner"
        />
        <Router>
          <Routes>
            <Route path="/" element={<Wedding />} />
            <Route path="/puzzle-solutions" element={<PuzzleSolutions />} />
          </Routes>
        </Router>
        <img
          src={down_right_corner}
          className="App-DR"
          alt="down_right_corner"
        />
      </div>
    </div>
  );
}

export default App;

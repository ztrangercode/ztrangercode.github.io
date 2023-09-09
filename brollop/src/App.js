//import { useMediaQuery } from 'react-responsive'
import down_right_corner from "./Down_right_corner.jpg";
import upper_left_corner from "./Upper_left_corner.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="art">
          <header className="App-header">Sandra och Fredrik</header>
          <p>
            Datum: 2024-07-20 eller 2024-07-27 (Preliminär) <br />
            Tid: 15:00 (Preliminär)
          </p>

          <p>
            Vigsel: <br />
            Mo Kyrka <br />
            549 92 Moholm
          </p>
          <p>
            Fest: (16:00 till 01:00) <br />
            Moholms Herrgård 549 92 Moholm
          </p>

          <p>
            Övernattning: Det finns några rum på Moholms Herrgård, se
            <a href="http://www.moholmsherrgard.se/hotellrum.html">
              http://www.moholmsherrgard.se/hotellrum.html
            </a>
            och hör av er till oss om ni är intresserade!
          </p>
        </div>
      </div>
      <img src={upper_left_corner} className="App-UL" alt="" />
      <img src={down_right_corner} className="App-DR" alt="" />
    </div>
  );
}

export default App;

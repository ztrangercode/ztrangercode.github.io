//import { useMediaQuery } from 'react-responsive'
import down_right_corner from "./Down_right_corner.jpg";
import upper_left_corner from "./Upper_left_corner.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="art">
          <p>Hjärtligt välkomna till vigseln mellan </p>
          <p>
            <span className="LargeNames">Sandra och Fredrik</span>
          </p>
          <p>
            <a href="https://goo.gl/maps/5kBNjbF8HrQjau8W9">
              Mo Kyrka, 549 92 Moholm
            </a>
            <br />
            Lördagen den 20:e Juli 2024, kl. 15:00 <br />
          </p>
          <p>
            Därefter middag och fest på
            <br />
            <a href="https://goo.gl/maps/joCJhbMj3YbN5z6p7">
              Moholms Herrgård, 549 92 Moholm
            </a>
          </p>
          <p>
            <a href="https://forms.gle/9UbNJMQUdg6XDWuy5">
              Klicka här för att anmäla er
            </a>
          </p>

          <p>
            Övernattning: Det finns några rum på <br />
            <a href="http://www.moholmsherrgard.se/hotellrum.html">
              Moholms Herrgård
            </a>{" "}
            <br />
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

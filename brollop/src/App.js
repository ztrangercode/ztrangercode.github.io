//import { useMediaQuery } from 'react-responsive'
import down_right_corner from "./Down_right_corner.webp";
import upper_left_corner from "./Upper_left_corner.webp";
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
            Lördagen den 20:e Juli 2024, kl. 14:00 <br />
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

          <p>
            Klädsel:
            <br />
            Kostym
          </p>

          <p>
            Vi önskar att ni inte tar med barn på vigseln och festen. <br />
            Vi hoppas att ni har förståelse för detta.
            <br />
            Undantag syskonbarn.
          </p>
        </div>
      </div>

      <img src={upper_left_corner} className="App-UL" alt="upper_left_corner" />
      <img src={down_right_corner} className="App-DR" alt="down_right_corner" />
    </div>
  );
}

export default App;

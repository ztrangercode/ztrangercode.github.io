//import { useMediaQuery } from 'react-responsive'
import down_right_corner from "./Down_right_corner.webp";
import upper_left_corner from "./Upper_left_corner.webp";
import swish_qr from "./swish-QR-small.webp";
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
        <div className="article">
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
          <p className="signup">
            <a href="https://forms.gle/9UbNJMQUdg6XDWuy5">
              Klicka här för att anmäla er
            </a>
          </p>
          <p>
            Barn är underbara men den här dagen väljer vi att fira i vuxet
            sällskap. Med undantag av syskonbarn.
          </p>
          <p>Klädsel: Mörk Kostym</p>

          <p>
            Presenter: Vi önskar inte några saker, det viktiga är att ni kommer
            och firar med oss. Om ni ändå vill ge något, kan ni ge oss ett
            bidrag till våran Bröllopsresa. Swish 076-1671572 Fredrik Aronsson.
          </p>

          <p>
            Övernattning:
            <br />
            Herrgården eller Mariestad (20 km) <br />
            <a href="http://www.moholmsherrgard.se/hotellrum.html">
              Moholms Herrgård
            </a>
            <br />
            <a href="https://www.hotelwictoria.se/sv">Hotel Wictoria</a>
            <br />
            <a href="https://hotelvanerport.se/">Hotell Vänerport</a>
          </p>
          <p>
            Kontakta oss på{" "}
            <a href="mailto:sandra80fredrik78@gmail.com">
              sandra80fredrik78@gmail.com
            </a>
            <br />
            eller ring 076-1671572 om ni har några frågor.
          </p>
        </div>
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

//import { useMediaQuery } from 'react-responsive'
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
          <p>Klädsel: Kostym</p>
          <p>
            Barn är underbara men den här dagen väljer vi att fira i vuxet
            sällskap. Med undantag av syskonbarn.
          </p>

          <p>
            Övernattning:{" "}
            <a href="http://www.moholmsherrgard.se/hotellrum.html">
              Moholms Herrgård
            </a>
            {" eller Mariestad (20 km)"}
          </p>

          <p>
            Presenter: Vi önskar inte några saker, det viktiga är att ni kommer
            och firar med oss. Om ni ändå vill ge något, kan ni ge oss ett
            bidrag till vår bröllopsresa! Swish 076-1671572 Fredrik Aronsson.
          </p>
          <p>
            Foto och film! Vi kommer inte ha någon fotograf, så dela gärna era
            bilder och filmer med oss! Vi kan rekommendera{" "}
            <a href="https://sprend.com/sv">Sprend</a> eller dela ett Google
            fotoalbum med vår epost nedan.
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

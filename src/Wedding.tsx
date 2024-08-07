import React from "react";
import { Link } from "react-router-dom";

const Wedding: React.FC = () => {
  return (
    <div className="article">
      <p>Hjärtligt välkomna till vigseln mellan </p>
      <p>
        <span className="LargeNames">Sandra och Fredrik</span>
      </p>
      <p>
        <a href="https://maps.app.goo.gl/aLS6Sfv6CpARh5Kc6">
          Ransbergs Kyrka, Örlenvägen 5, Tibro
        </a>
        <br />
        Lördagen den 20:e Juli 2024, kl. 15:00 <br />
      </p>
      <p>
        Därefter middag och fest på
        <br />
        <a href="https://goo.gl/maps/joCJhbMj3YbN5z6p7">
          Moholms Herrgård, Moholm
        </a>
      </p>
      <p className="signup">
        <a href="https://forms.gle/9UbNJMQUdg6XDWuy5">
          Klicka här för att anmäla er
        </a>
      </p>
      <p>Klädsel: Kostym</p>
      <p>
        Barn är underbara men den här dagen väljer vi att fira i vuxet sällskap.
        Med undantag av syskonbarn.
      </p>

      <p>
        Vi kommer ha en gäst med astma, tål ej parfym, starkt luktande blommor
        (syren, liljekonvalj m.fl.), tobaksrök.
      </p>

      <p>
        Övernattning:{" "}
        <a href="http://www.moholmsherrgard.se/hotellrum.html">
          Moholms Herrgård
        </a>
        {" eller Mariestad (20 km)"}
      </p>

      <p>
        Presenter: Vi önskar inte några saker, det viktiga är att ni kommer och
        firar med oss. Om ni ändå vill ge något, kan ni ge oss ett bidrag till
        vår bröllopsresa! Swish 076-1671572 Fredrik Aronsson.
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
      <p>
        <Link to="/puzzle-solutions">Facit till alla pussel</Link>
      </p>
    </div>
  );
};

export default Wedding;

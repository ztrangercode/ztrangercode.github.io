import ringar from './ringar.jpg';
import herrgard from './moholms_herrgard.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={herrgard} className="App-ringar" alt="ringar" />
        <p>
        Datum: 2024-07-20 eller 2024-07-27 (Preliminär) <br/>
        Tid: 15:00 (Preliminär)</p>

        <p>Vigsel:<br/>
        Mo Kyrka<br/>
        549 92 Moholm</p>
        <p>Fest: (16:00 till 01:00)<br/>
        Moholms Herrgård
        549 92 Moholm</p>

        <p>
        Övernattning: Det finns några rum på Moholms Herrgård, 
        se <a href="http://www.moholmsherrgard.se/hotellrum.html">http://www.moholmsherrgard.se/hotellrum.html</a> 
        och hör av er till oss om ni är intresserade!
        </p>
      </header>
    </div>
  );
}

export default App;

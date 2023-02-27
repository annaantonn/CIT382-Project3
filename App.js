import ShowJupiterMoons from './ShowJupiterMoons';
import { JupiterMoonData } from './data/JupiterMoonData';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <h1>CIT 382 - 22W</h1>
      <h2>Project 3</h2>
      <h3>Four Moons of Jupiter</h3>
      <ShowJupiterMoons moons={JupiterMoonData} />
    </div>
  );
}

import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <br />
      <h4>
        <a
          href="https://github.com/kaylashovlowsky/shecodes-react-mock"
          alt="Github Link"
        >
          Open-source code
        </a>{" "}
        by Kayla Shovlowsky
      </h4>
    </div>
  );
}

export default App;

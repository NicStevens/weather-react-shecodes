import "./styles.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        This app was coded by Nicky Stevens and is open-sourced on{" "}
        <a
          href="https://github.com/NicStevens/weather-react-shecodes"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        .{" "}
      </p>
    </div>
  );
}

export default App;

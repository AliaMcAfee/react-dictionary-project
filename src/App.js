import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <h1> 📖 Dictionary Project</h1>

      <Dictionary />

      <footer className="app-footer">
        Project coded by Alia McAfee hosted on <a href="/">Github</a> and
        open-sourced on <a href="/">Netlify</a>.
      </footer>
    </div>
  );
}

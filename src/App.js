import "./App.scss";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter initialValue={10} />
      <Counter />
    </div>
  );
}

export default App;

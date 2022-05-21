import "./App.scss";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter initialValue={10} />
      <Counter initialValue={3} />
    </div>
  );
}

export default App;

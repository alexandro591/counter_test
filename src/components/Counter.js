import useCounter from "../hooks/useCounter";
import styles from "./styles.module.scss";

function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useCounter(initialValue);

  return (
    <div className={styles.counter}>
      <button
        onClick={() => setCounter((_counter) => _counter + 1)}
      >{`Click count: ${counter}`}</button>
    </div>
  );
}

export default Counter;

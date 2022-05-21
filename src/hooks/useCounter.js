const { useState } = require("react");

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  return [counter, setCounter];
};

export default useCounter;

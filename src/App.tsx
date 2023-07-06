import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>途中下写</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>メンバー数 {count}</button>
      </div>
    </div>
  );
}

export default App;

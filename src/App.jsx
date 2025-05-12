import React, { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const calculate = async (op) => {
    const response = await fetch(`http://localhost:5000/${op}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ a: Number(a), b: Number(b) }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      <div>
        <button onClick={() => calculate("add")}>Sumar</button>
        <button onClick={() => calculate("subtract")}>Restar</button>
      </div>
      {result !== null && <h3>Resultado: {result}</h3>}
    </div>
  );
}

export default App;

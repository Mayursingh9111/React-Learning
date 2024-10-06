import { useState } from "react";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center bg-green-400 text-black rounded-xl w-28">
        Hello World
      </h1>
      <Card userName='Mayur' btnText='Singh'/>
      <Card userName='Shekhawat' btnText='ShowMe'/>
    </>
  );
}

export default App;

import Square from "./Square";
import InputBox from "./InputBox";
import { useState } from "react";

function App() {
  const [inputValue, setinputValue] = useState("");

  return (
    <div className="App">
      <Square squareText={inputValue}/>
      <InputBox inputValue={inputValue} setinputValue={setinputValue} />
    </div>
  );
}

export default App;

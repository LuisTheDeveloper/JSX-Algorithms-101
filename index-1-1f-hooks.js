// Using hooks in React
// A hook is a function that allows you to add functionality 
// to a component.
// useState is a built in hook thaw we can use to handle state changes 
// within our application.
import React, {useState} from "react";
import "./styles.css";

export default function App() {
  const [status, setStatus] = useState("Open");
  return (
    <div className="App">
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Back in 5")}>Break</button>            
      <button onClick={() => setStatus("Closed")}>Closed</button>
    </div>
  );
}

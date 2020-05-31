// Using hooks in React
// Dependecy array it's going to allow for smart rendering, so we won't
// trigger unnecessary re-renders if we pass the right values to that array.
// We want only one of these useEffects to fire if that state value is being updated.
// The second argument of useEffect is called the dependecy array.
// In that array we will use the state variable that we want to listen for changes.

import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${val}`);
  }, [val]);

  useEffect(() => {
    console.log(`field 2: ${val2}`);
  }, [val2]);

  return (
    <>
      <label>
        Favorite Phrase:
        <input value={val} onChange={e => setVal(e.target.value)} />
      </label>
      <br />
      <label>
        Second Favorite Phrase:
        <input value={val2} onChange={e => setVal2(e.target.value)} />
      </label>
    </>
  );
}

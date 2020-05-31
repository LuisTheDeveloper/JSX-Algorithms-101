// Using hooks in React
// Using reducers
// A reducer function's most simple definition is that it takes 
// in the current state, and it returns a new state. 
// So if checked is false, it should return the opposite, true. 
// So instead of hard-coding this behavior into onChange events or 
// into its own function, we can abstract this logic one layer up. 
// So we can take that logic and put it into a reducer function 
// that's always going to produce the same results. 
// So instead of using useState in this component now, we're going to use useReducer

import React, { useState, useReducer } from "react";
import "./styles.css";

export default function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
    );

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}

// Using hooks in React

import React, { useState, useEffect } from "react";
import "./styles.css";

function GitHubUser({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);
  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} />
      </div>
    );
  }
  return null;
}

export default function App() {
  return <GitHubUser login="luisthedeveloper" />;
}

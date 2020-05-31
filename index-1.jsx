const cityList = ["Bridgend", "Worcester", "Cardiff"];

function App({cities}) {
  return(
    <ul>
    {cities.map(city => (
      <li>{city}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(
  <App cities={cityList} />,
  document.getElementById('root')
);

// List of objects
const cityList = [
  {id: "1", name: "Echo", trailhead: "Echo"},
  {id: "2", name: "Maud", trailhead: "Wrights"},
  {id: "3", name: "Velma", trailhead: "Bayview"}
];

function App({cities}) {
  return(
    <div>
      {cities.map(city => (
        <div>
          <h2>{city.name}</h2>
          <p>Accessed by: {city.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(
  <App cities={cityList} />,
  document.getElementById('root')
);

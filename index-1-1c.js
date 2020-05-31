// Using ternary ifs:

function Lake({name}) {
  return (
    <div>
      <h1> Visit {name}! </h1>
    </div>
  );
}

function SkiResort({name}) {
  return(
    <div>
      <h1>Visit {name} </h1>
    </div>
  );
}

function App({season}) {
  return(
    <div>
      {
        season === "summer" ? (
          <Lake name="Albufeira Lake" />
        ) : season === "winter" ? (
          <SkiResort name="Serra da Estrela" />
        ) : (
          <h1> Come back in the winter or summer </h1>
        )}
    </div>
  )

}

ReactDOM.render(
  <App season="winter" />,
  document.getElementById('root')
);

//Using React fragments to wrapp all the components

function Lake({name}) {
  return (
    <div>
      <h1> Visit Lake! </h1>
    </div>
  );
}

function SkiResort({name}) {
  return(
    <div>
      <h1>Visit SkiResort </h1>
    </div>
  );
}

function App({season}) {
  return(
    <>
      <Lake/>
      <SkiResort />
    </>
  )

}

ReactDOM.render(
  <App season="winter" />,
  document.getElementById('root')
);

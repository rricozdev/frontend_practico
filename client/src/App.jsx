import imagen from "../../05.Intro-React/react-1.svg";

function App() {
  return (
    <>
      <div className="container">
        <h1 id="title">¡Hola React desde JSX</h1>
        <p>
          Esto es un párrafo con <strong>enfásis</strong>
        </p>
        <button onClick={() => alert("Click")}>Presióname</button>
      </div>
      <img src={imagen} width={"250px"}  alt="logo react" />
    </>
  );
}

export default App;

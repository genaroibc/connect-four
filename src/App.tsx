import { Board } from "./components/Board/Board";

function App() {
  return (
    <>
      <h1>CONNECT FOUR</h1>
      <Board cols={4} rows={4} />
    </>
  );
}

export default App;

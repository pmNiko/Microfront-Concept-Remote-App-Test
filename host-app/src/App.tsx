import { Suspense } from "react";
import Title from "./Title";
import { Button, Test } from "./Remotes";
import "./App.css";

function App() {
  return (
    <>
      <Title />
      {/* Render Module Federation */}
      <Suspense fallback={<div>Cargando los modulos remotos</div>}>
        <Test />
        <Button />
      </Suspense>
    </>
  );
}

export default App;

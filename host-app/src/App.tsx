import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ResourceNotAvailable from "./ResourceNotAvailable";
import Title from "./Title";
import "./App.css";

const TestRemoteComponent = lazy(() => import("remoteApp/TestRemoteComponent"));
const CustomButton = lazy(() => import("remoteApp/CustomButton"));
// import RemoteComponent from 'remoteApp/RemoteComponent'

function App() {
  return (
    <>
      <Title />
      {/* Render Module Federation */}
      <Suspense fallback={<div>Cargando los modulos remotos</div>}>
        <ErrorBoundary fallback={<ResourceNotAvailable />}>
          <TestRemoteComponent />
        </ErrorBoundary>
        <div style={{ marginBottom: "3rem" }}></div>
        <ErrorBoundary fallback={<ResourceNotAvailable />}>
          <CustomButton />
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;

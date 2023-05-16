import { lazy } from "react";
import withErrorBoundary from "./withErrorBundaries";

const TestRemote = lazy(() => import("remoteApp/TestRemoteComponent"));

const Test = () => withErrorBoundary(TestRemote);

export default Test;

import { lazy } from "react";
import withErrorBoundary from "./withErrorBundaries";

const CustomButton = lazy(() => import("remoteApp/CustomButton"));

const Button = () => withErrorBoundary(CustomButton);

export default Button;

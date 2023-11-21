import { Box } from "@mui/material";
import "./Title.css";
import viteLogo from "/vite.svg";
import tsLogo from "/ts.svg";
import reactLogo from "/react.svg";

export default () => {
  return (
    <Box>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://typescript.org" target="_blank">
          <img src={tsLogo} className="logo" alt="Typescript logo" />
        </a>
      </div>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import viteLogo from "/vite.svg";
import "./Title.css";

export default () => {
  return (
    <Box>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png?f=webp"
            className="logo react"
            alt="React logo"
          />
        </a>
        <a href="https://typescript.org" target="_blank">
          <img
            src="https://logodix.com/logo/1783710.png"
            className="logo"
            alt="Typescript logo"
          />
        </a>
      </div>
      {/* <h1>Vite + React + TS</h1> */}
      {/* <Typography variant="caption">Federación de módulos con vite</Typography> */}
    </Box>
  );
};

// src/RemoteComponent.js

import { Typography } from "@mui/material";

const RemoteComponent = () => (
  <Typography
    variant="body1"
    sx={{
      fontWeight: "bolder",
      backgroundColor: "blue",
      color: "white",
      borderRadius: "5px",
      height: "2em",
      pt: "0.5em",
    }}
  >
    Microfrontend{" "}
  </Typography>
);

export default RemoteComponent;

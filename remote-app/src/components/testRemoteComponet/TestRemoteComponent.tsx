// src/RemoteComponent.js

import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const RemoteComponent = () => {
  const [data, setData] = useState<any>([]);

  const handleClick = async () => {
    const data = await fetch("https://mui.com/material-ui/react-button/");
    setData(data);
  };
  return (
    <div
      style={{ border: "1px solid black", padding: "3em", marginBottom: "2em" }}
    >
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
        Microfrontend
      </Typography>

      <Stack direction="column" spacing={2} my={4}>
        <Typography variant="body2">
          Al romperse la ejecución el resto de la app sigue funcionando
        </Typography>
        <Button variant="contained" color="error" onClick={handleClick}>
          Generar error
        </Button>

        {data.map((elem: any) => (
          <p>{elem}</p>
        ))}
      </Stack>
    </div>
  );
};

export default RemoteComponent;

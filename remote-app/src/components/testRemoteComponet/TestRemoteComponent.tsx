// src/RemoteComponent.js

import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Loading from "../Loading/Loading";

const RemoteComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<any>>();

  const handleClick = async () => {
    setIsLoading(true);
    console.log("Carga de datos");

    const data = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    ).then((response) => response.json());

    setData(data);
    setIsLoading(false);
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

        {isLoading && <Loading />}

        {data?.map((elem: any, index: number) => (
          <div key={index}>
            <p>{elem}</p>
            {elem.name}
          </div>
        ))}
      </Stack>
    </div>
  );
};

export default RemoteComponent;

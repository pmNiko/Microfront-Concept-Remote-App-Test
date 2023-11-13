// src/RemoteComponent.js

import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Loading from "../Loading/Loading";
import { TodoResponse } from "./interface";

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorFetching, setIsErrorFetching] = useState(false);
  const [data, setData] = useState<Array<TodoResponse>>([]);
  const [dataError, setDataError] = useState<Array<TodoResponse>>([]);

  const handleClickError = async () => {
    setIsErrorFetching(true);
    setTimeout(async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/error"
      ).then((response) => response.json());

      setDataError(data);

      setIsErrorFetching(false);
    }, 3000);
  };

  const handleClickSuccess = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=4"
      ).then((response) => response.json());

      setData(data);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div
      style={{ border: "1px solid black", padding: "3em", marginBottom: "2em" }}
    >
      <Stack direction="column" spacing={2} my={4}>
        <Typography variant="body2">
          Al romperse la ejecución el resto de la app sigue funcionando
        </Typography>
        <Button variant="contained" color="error" onClick={handleClickError}>
          Generar error
        </Button>

        {isErrorFetching && <Loading />}
        {dataError.map((elem: TodoResponse, index: number) => (
          <div key={index}>{elem.title}</div>
        ))}
      </Stack>

      <Stack direction="column" spacing={2} mb={4}>
        <Typography variant="body2">
          La solicitud se realiza con éxito
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickSuccess}
        >
          Solicitar datos
        </Button>

        {isLoading && <Loading />}

        {data?.map((elem: TodoResponse, index: number) => (
          <div key={index}>{elem.title}</div>
        ))}
      </Stack>
    </div>
  );
};

// export default TestComponent;

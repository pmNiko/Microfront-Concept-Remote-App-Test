// src/RemoteComponent.js

import { Box, Button, Stack, Typography } from "@mui/material";
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
    <Box mx={5} mt={5}>
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="body2">
          Al romperse la ejecución el resto de la app sigue funcionando
        </Typography>

        <Button
          sx={{ maxWidth: 200, borderRadius: 2 }}
          variant="contained"
          color="error"
          onClick={handleClickError}
        >
          Generar error
        </Button>

        {isErrorFetching && <Loading color="error" />}
        {dataError.map((elem: TodoResponse, index: number) => (
          <div key={index}>{elem.title}</div>
        ))}
      </Stack>

      <Stack direction="column" spacing={2} mt={4} alignItems="center">
        <Typography variant="body2">
          La solicitud se realiza con éxito
        </Typography>
        <Button
          sx={{ maxWidth: 200, borderRadius: 2 }}
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
    </Box>
  );
};

// export default TestComponent;

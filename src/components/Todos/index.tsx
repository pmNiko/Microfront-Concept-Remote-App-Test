import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Loading from "../Loading/Loading";
import { TodoResponse } from "./interface";

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorFetching, setIsErrorFetching] = useState(false);
  const [todos, setTodos] = useState<Array<TodoResponse>>([]);
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

      setTodos(data);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Box mx={5} mt={5}>
      <Divider />
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography mt={2} variant="body2">
          Maneje el error en el App Shell
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
          Solicitar tareas
        </Button>

        {isLoading && <Loading />}

        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {todos?.map((todo: TodoResponse, index: number) => (
              <ListItem
                key={todo.id + index}
                disableGutters
                secondaryAction={
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={` ${todo.title}`} />
              </ListItem>
            ))}
          </List>
          {todos.length > 0 && (
            <Button
              sx={{ mt: 2, mb: 5 }}
              variant="contained"
              color="secondary"
              onClick={() => setTodos([])}
            >
              Limpiar tareas cargadas
            </Button>
          )}
        </Box>
      </Stack>
      <Divider />
    </Box>
  );
};

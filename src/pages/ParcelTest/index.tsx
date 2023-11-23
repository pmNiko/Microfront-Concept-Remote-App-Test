import { Box, Divider } from "@mui/material";
import { CardContainer } from "../../components/CardContainer";
import CustomButton from "../../components/CustomButton";
import Todos from "../../components/Todos";
import Title from "../../components/Title";

export default () => {
  return (
    <CardContainer
      md={8}
      title="Módulo federado"
      justifyTarget="space-around"
      minHeight="65vh"
    >
      <Box textAlign="center">
        <Title />
      </Box>
      <Box textAlign="center">
        <Todos />
      </Box>
      <Box textAlign="center" mx="auto">
        <CustomButton />
      </Box>
      <Divider sx={{ mx: 5, mb: 2 }} />
    </CardContainer>
  );
};

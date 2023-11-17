import { Box, Divider } from "@mui/material";
import { CardContainer } from "../../components/CardContainer";
import CustomButton from "../../components/CustomButton";
import Todos from "../../components/Todos";
import Title from "../../components/Title";

export default () => {
  return (
    <CardContainer md={8} title="Módulo federado" justifyTarget="space-around">
      <Box textAlign="center">
        <Title />
        <Divider sx={{ mx: 5, mt: 2 }} />
      </Box>
      <Box textAlign="center" mx="auto">
        <CustomButton />
      </Box>
      <Box textAlign="center">
        <Todos />
      </Box>
    </CardContainer>
  );
};

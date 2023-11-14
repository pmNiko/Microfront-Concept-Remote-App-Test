import { Box } from "@mui/material";
import { CardContainer } from "../../components/CardContainer";
import CustomButton from "../../components/CustomButton";
import Todos from "../../components/Todos";
import Title from "../../components/Title";

export default () => {
  return (
    <CardContainer title="Parcel remoto" justifyTarget="space-around" mb={5}>
      <Box textAlign="center">
        <Title />

        <Todos />
      </Box>
      <Box textAlign="center" mx="auto">
        <CustomButton />
      </Box>
    </CardContainer>
  );
};

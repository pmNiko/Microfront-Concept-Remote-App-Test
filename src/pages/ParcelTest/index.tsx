import { Box } from "@mui/material";
import { CardContainer } from "../../components/CardContainer";
import CustomButton from "../../components/CustomButton";
import Todos from "../../components/Todos";
import Title from "../../components/Title";

export default () => {
  return (
    <CardContainer md={8} title="Parcel remoto" justifyTarget="space-around">
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

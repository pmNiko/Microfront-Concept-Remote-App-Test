import "./Button.css";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

const CustomButton = () => {
  return (
    <div className="button-remote">
      <Stack direction="row" spacing={1} p={2} border={1}>
        <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
        <IconButton aria-label="fingerprint" color="success">
          <Fingerprint />
        </IconButton>
      </Stack>
    </div>
  );
};

export default CustomButton;

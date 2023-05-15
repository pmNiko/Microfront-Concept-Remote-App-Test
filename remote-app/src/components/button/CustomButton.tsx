import "./Button.css";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { Typography } from "@mui/material";

const CustomButton = () => {
  return (
    <div className="button-remote">
      <Stack direction="row" spacing={1}>
        <Typography variant="subtitle2" pt={1} color="green">
          Remote Buttons
        </Typography>
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

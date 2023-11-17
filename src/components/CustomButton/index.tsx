import Fingerprint from "@mui/icons-material/Fingerprint";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export default () => {
  const handleTestEvent = () => {
    window.dispatchEvent(
      new CustomEvent("EVENT_TEST", {
        detail: { info: "Contenido de prueba enviado desde el parcel." },
      })
    );
  };

  const handleSendProduct = () => {
    window.dispatchEvent(
      new CustomEvent("EVENT_SEND_PRODUCT", {
        detail: {
          title: "Producto",
          description: "Este es un producto de prueba.",
          price: 80.9,
          date: new Date("2023-11-17"),
        },
      })
    );
  };

  return (
    <Box p={2}>
      <Typography variant="caption">
        Capture los eventos en el App Shell
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        <Box mx="auto">
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }} mt={2}>
            EVENT_TEST
          </Typography>
          <IconButton
            aria-label="fingerprint"
            color="success"
            onClick={handleTestEvent}
          >
            <Fingerprint />
          </IconButton>
        </Box>

        <Box mx="auto">
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }} mt={2}>
            EVENT_SEND_PRODUCT
          </Typography>
          <IconButton
            aria-label="fingerprint"
            color="secondary"
            onClick={handleSendProduct}
          >
            <Fingerprint />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

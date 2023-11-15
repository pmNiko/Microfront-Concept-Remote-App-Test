import Fingerprint from "@mui/icons-material/Fingerprint";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export default () => {
  const handleTestEvent = () => {
    window.dispatchEvent(
      new CustomEvent("EVENT_TEST", { detail: { info: "Info test event..." } })
    );
  };

  const handleAddToCart = () => {
    window.dispatchEvent(
      new CustomEvent("ADD_TO_CART_TEST", {
        detail: {
          title: "Product 1",
          description: "This is a product test",
          price: 80.9,
          date: new Date("2014-07-02"),
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
            ADD_TO_CART_TEST
          </Typography>
          <IconButton
            aria-label="fingerprint"
            color="secondary"
            onClick={handleAddToCart}
          >
            <Fingerprint />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

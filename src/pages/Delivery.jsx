import { Box, Button, Typography } from "@mui/material";
import BoxAndPot from "../components/Core/BoxAndPot";
import {
  DELIVERY_TITLE,
  DELIVERY_ADVANTAGES,
  DELIVERY_TEXT,
  DELIVERY_BUTTON_TEXT,
} from "../constants/constants";
import delivery from "../assets/icons/delivery.png";

function Delivery() {
  return (
    <Box sx={{ display: "flex", padding: "160px 0 240px" }}>
      <Box
        sx={{
          width: "52%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <Typography
          sx={{ fontSize: "56px", fontWeight: 800, fontStyle: "italic" }}
        >
          {DELIVERY_TITLE}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "auto auto",
            gap: "8px",
          }}
        >
          <Box sx={{ display: "flex", gap: "96px" }}>
            {DELIVERY_ADVANTAGES.slice(0, 3).map((advantage) => (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                key={advantage.id}
              >
                <Box component="img" src={delivery} />
                <Typography fontSize={24}>{advantage.text}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "96px" }}>
            {DELIVERY_ADVANTAGES.slice(3).map((advantage) => (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                key={advantage.id}
              >
                <Box component="img" src={delivery} />
                <Typography fontSize={24}>{advantage.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Typography fontSize={22}>{DELIVERY_TEXT}</Typography>
        <Button
          sx={{
            borderWidth: "3px",
            borderStyle: "solid",
            borderColor: "accentColor.main",
            borderRadius: 0,
            color: "textColor.main",
            width: "fit-content",
            padding: "16px 56px",
            fontFamily: "Roboto Condensed Variable",
            fontSize: "20px",
            fontWeight: 700,
            "&:hover": {
              borderColor: "accentColor.main",
              borderWidth: "3px"
            }
          }}
          variant="outlined"
          disableElevation
          disableRipple
        >
          {DELIVERY_BUTTON_TEXT}
        </Button>
      </Box>
      <Box sx={{ width: "48%", overflow: "hidden" }}>
        <BoxAndPot />
      </Box>
    </Box>
  );
}

export default Delivery;

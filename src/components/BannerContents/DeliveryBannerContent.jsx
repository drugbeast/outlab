import { Typography, Box } from "@mui/material";
import {
  DELIVERY_TITLE,
  DELIVERY_ADVANTAGES,
  DELIVERY_TEXT,
} from "../../constants/constants";
import delivery from "../../assets/icons/delivery.png";
import CustomButton from "../../components/Core/CustomButton";

function DeliveryBannerContent() {
  return (
    <>
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
      <CustomButton variant="outlined" />
    </>
  );
}

export default DeliveryBannerContent;

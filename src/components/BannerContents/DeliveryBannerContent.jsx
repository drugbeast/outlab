import { Box,Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import delivery from "../../assets/icons/delivery.png";
import CustomButton from "../../components/Core/CustomButton";
import {
  DELIVERY_ADVANTAGES,
  DELIVERY_TEXT,
  DELIVERY_TITLE,
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY
} from "../../constants/constants";

function DeliveryBannerContent() {
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY)
  return (
    <>
      <Typography
        sx={{ fontWeight: 800, fontStyle: "italic" }}
        fontSize={Large ? 42 : Medium ? 36 : 52}
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
        <Box sx={{ display: "flex", gap: Large ? "32px" : "96px" }}>
          {DELIVERY_ADVANTAGES.slice(0, 3).map((advantage) => (
            <Box
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
              key={advantage.id}
            >
              <Box component="img" src={delivery} />
              <Typography fontSize={Large ? 20 : 24}>{advantage.text}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: Large ? "32px" : "96px" }}>
          {DELIVERY_ADVANTAGES.slice(3).map((advantage) => (
            <Box
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
              key={advantage.id}
            >
              <Box component="img" src={delivery} />
              <Typography fontSize={Large ? 20 : 24}>{advantage.text}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Typography fontSize={Large ? 20 : 22}>{DELIVERY_TEXT}</Typography>
      <CustomButton variant="outlined" />
    </>
  );
}

export default DeliveryBannerContent;

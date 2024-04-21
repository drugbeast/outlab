import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import delivery from "../../assets/icons/delivery.png";
import CustomButton from "../../components/Core/CustomButton";
import {
  DELIVERY_ADVANTAGES,
  DELIVERY_TEXT,
  DELIVERY_TITLE,
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";

function DeliveryBannerContent() {
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <>
      <Typography
        sx={{ fontWeight: 800, fontStyle: "italic" }}
        fontSize={Large ? 42 : Medium ? 36 : Small ? 40 : 52}
      >
        {DELIVERY_TITLE}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: Medium
            ? "auto auto auto"
            : Small
            ? "auto"
            : "auto auto",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: Small ? "8px" : Medium ? "24px" : Large ? "32px" : "96px",
            flexDirection: Small ? "column" : "row",
          }}
        >
          {DELIVERY_ADVANTAGES.slice(0, Medium ? 2 : 3).map((advantage) => (
            <Box
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
              key={advantage.id}
            >
              <Box component="img" src={delivery} />
              <Typography fontSize={Medium ? 16 : Large ? 20 : 24}>
                {advantage.text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: Small ? "8px" : Medium ? "24px" : Large ? "32px" : "96px",
            flexDirection: Small ? "column" : "row",
          }}
        >
          {DELIVERY_ADVANTAGES.slice(Medium ? 2 : 3, Medium ? 4 : 6).map(
            (advantage) => (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                key={advantage.id}
              >
                <Box component="img" src={delivery} />
                <Typography fontSize={Medium ? 16 : Large ? 20 : 24}>
                  {advantage.text}
                </Typography>
              </Box>
            )
          )}
        </Box>
        {Medium && (
          <Box
            sx={{
              display: "flex",
              gap: Medium ? "24px" : Large ? "32px" : "96px",
            }}
          >
            {DELIVERY_ADVANTAGES.slice(4).map((advantage) => (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                key={advantage.id}
              >
                <Box component="img" src={delivery} />
                <Typography fontSize={Medium ? 16 : Large ? 20 : 24}>
                  {advantage.text}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      <Typography fontSize={Medium ? 16 : Large ? 20 : 22} textAlign={Small ? "center" : "left"}>
        {DELIVERY_TEXT}
      </Typography>
      <CustomButton variant="outlined" />
    </>
  );
}

export default DeliveryBannerContent;

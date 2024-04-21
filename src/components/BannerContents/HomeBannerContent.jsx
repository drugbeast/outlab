import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import CustomButton from "../../components/Core/CustomButton";
import {
  HOME_BANNER_BRANDS,
  HOME_BANNER_INFORMATION_TEXT,
  HOME_BANNER_TITLE,
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";

function HomeBannerContent() {
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <>
      <Typography
        sx={{ display: Small ? "none" : "block" }}
        fontSize={Medium ? 18 : 24}
      >
        {HOME_BANNER_BRANDS}
      </Typography>
      <Typography
        fontWeight={800}
        fontSize={Large ? 42 : Medium ? 32 : Small ? 40 : 52}
        fontStyle="italic"
        textAlign={Small ? "center" : "left"}
      >
        {HOME_BANNER_TITLE}
      </Typography>
      <Typography
        fontSize={Medium ? 18 : Large ? 24 : Small ? 24 : 36}
        textAlign={Small ? "center" : "left"}
      >
        {HOME_BANNER_INFORMATION_TEXT}
      </Typography>
      <CustomButton variant="outlined" />
    </>
  );
}

export default HomeBannerContent;

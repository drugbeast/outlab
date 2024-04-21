import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import CustomButton from "../../components/Core/CustomButton";
import {
  LARGE_MEDIA_QUERY,
  LINES_BANNER_TEXT,
  LINES_BANNER_TITLE,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";

function LinesBannerContent() {
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <>
      <Typography
        fontWeight={800}
        fontSize={Small ? 46 : Large ? 42 : Medium ? 36 : 52}
        fontStyle="italic"
      >
        {LINES_BANNER_TITLE}
      </Typography>
      <Typography
        fontSize={Small ? 24 : Medium ? 20 : Large ? 24 : 36}
        textAlign={Small ? "center" : "left"}
      >
        {LINES_BANNER_TEXT}
      </Typography>
      <CustomButton variant="outlined" />
    </>
  );
}

export default LinesBannerContent;

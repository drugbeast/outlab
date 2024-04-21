import { Typography, useMediaQuery } from "@mui/material";

import {
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";
import {
  HOME_WARNING_BLOCK_TEXT,
  HOME_WARNING_BLOCK_TITLE,
} from "../../constants/constants";

function WarningBlock() {
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <>
      <Typography
        fontSize={Small ? 34 : Medium ? 40 : Large ? 48 : 56}
        color="accentColor.main"
        fontWeight={700}
        fontStyle="italic"
        textAlign="center"
      >
        {HOME_WARNING_BLOCK_TITLE}
      </Typography>
      <Typography
        sx={{ marginTop: "16px" }}
        fontSize={Small ? 22 : Medium ? 24 : Large ? 30 : 36}
        color="accentColor.main"
        fontWeight={400}
        textAlign="center"
      >
        {HOME_WARNING_BLOCK_TEXT}
      </Typography>
    </>
  );
}

export default WarningBlock;

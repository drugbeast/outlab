import { Box, Typography, useMediaQuery } from "@mui/material";

import { HOME_RUNNING_LINE_TEXT } from "../../constants/constants";
import {
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";

function RunningLine() {
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <Box
      sx={{
        display: "flex",
        animation: "running-line 15s linear infinite",
      }}
    >
      {HOME_RUNNING_LINE_TEXT.map((item) => (
        <Typography
          key={item.id}
          sx={{
            padding: "0 120px",
            fontSize: Small ? "24px" : Medium ? "28px" : Large ? "32px" : "36px",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          {item.text}
        </Typography>
      ))}
    </Box>
  );
}

export default RunningLine;

import { Box, Typography } from "@mui/material";

import { HOME_RUNNING_LINE_TEXT } from "../../constants/constants";

function RunningLine() {
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
            fontSize: "36px",
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

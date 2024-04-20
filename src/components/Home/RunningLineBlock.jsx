import { Box } from "@mui/material";

import promotional from "../../assets/videos/promotional.mp4";
import RunningLine from "./RunningLine";

function RunningLineBlock() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        height: "500px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "80px",
          backgroundColor: "accentColor.main",
          transform: "rotate(-10deg)",
          width: "120%",
          position: "absolute",
          overflow: "hidden",
          top: "180px",
          left: "-30px",
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          "@keyframes running-line": {
            "0%": {
              transform: "translateX(0)",
            },
            "100%": {
              transform: "translateX(-100%)",
            },
          },
        }}
      >
        <RunningLine />
        <RunningLine />
      </Box>
      <video autoPlay loop muted style={{ width: "100%" }}>
        <source src={promotional} type="video/mp4" />
      </video>
    </Box>
  );
}

export default RunningLineBlock;

import { Box, useMediaQuery } from "@mui/material";

import promotional from "../../assets/videos/promotional.mp4";
import {
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";
import RunningLine from "./RunningLine";

function RunningLineBlock() {
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        height: Large ? "450px" : Medium ? "350px" : Small ? "300px" : "500px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: Large ? "70px" : Medium ? "55px" : Small ? "45px" : "80px",
          backgroundColor: "accentColor.main",
          transform: Large || Small ? "rotate(-15deg)" : Medium ? "rotate(-12deg)" : "rotate(-10deg)",
          width: "120%",
          position: "absolute",
          overflow: "hidden",
          top: Large ? "170px" : Medium ? "135px" : Small ? "120px" : "180px",
          left: Large ? "-40px" : "-30px",
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

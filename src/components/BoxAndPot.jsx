import { Box, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

import circle from "../assets/images/circle.png";
import { SMALL_MEDIA_QUERY } from "../constants/constants";

BoxAndPot.propTypes = {
  imageFirst: PropTypes.string,
  imageSecond: PropTypes.string,
  leftFirst: PropTypes.string,
  topFirst: PropTypes.string,
  widthFirst: PropTypes.string,
  widthSecond: PropTypes.string,
  rightSecond: PropTypes.string,
  topSecond: PropTypes.string,
  section: PropTypes.string,
};

function BoxAndPot(props) {
  const Small = useMediaQuery(SMALL_MEDIA_QUERY)
  const {
    imageFirst,
    imageSecond,
    leftFirst,
    topFirst,
    widthFirst,
    widthSecond,
    rightSecond,
    topSecond,
    section,
  } = props;
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "80%",
            animation: "outer-spin 30s linear infinite",
            "@keyframes outer-spin": {
              "0%": {
                transform: "rotate(0deg)",
              },
              "100%": {
                transform: "rotate(360deg)",
              },
            },
          }}
          component="img"
          src={circle}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "22%",
          width: "56%",
          animation: "inner-spin 30s linear infinite",
          "@keyframes inner-spin": {
            "0%": {
              transform: "rotate(360deg)",
            },
            "100%": {
              transform: "rotate(0deg)",
            },
          },
        }}
        component="img"
        src={circle}
      />
      <Box
        sx={{
          width: "24%",
          height: "25%",
          borderRadius: "50%",
          backgroundColor: "accentColor.main",
          opacity: "0.4",
          top: Small ? "31%" : "38%",
          right: "38%",
          boxShadow: "0 0 3vw 4vw",
          color: "accentColor.main",
          position: "absolute",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: `${topFirst}`,
          left: `${leftFirst}`,
          width: `${widthFirst}`,
          animation: "levitation-first 2s linear infinite",
          "@keyframes levitation-first": {
            "0%": {
              transform: "translateY(10px)",
            },
            "50%": {
              transform: "translateY(-10px)",
            },
            "100%": {
              transform: "translateY(10px)",
            },
          },
        }}
        component="img"
        src={imageFirst}
      />
      <Box
        sx={{
          position: "absolute",
          right: `${rightSecond}`,
          top: `${topSecond}`,
          width: `${widthSecond}`,
          transform: section == "home" ? "" : "rotate(30deg)",
          animation: "levitation-second 2s linear infinite",
          "@keyframes levitation-second": {
            "0%": {
              transform: `translateY(10px) ${
                section == "home" ? "" : "rotate(30deg)"
              }`,
            },
            "50%": {
              transform: `translateY(-10px) ${
                section == "home" ? "" : "rotate(30deg)"
              }`,
            },
            "100%": {
              transform: `translateY(10px) ${
                section == "home" ? "" : "rotate(30deg)"
              }`,
            },
          },
        }}
        component="img"
        src={imageSecond}
      />
    </Box>
  );
}

export default BoxAndPot;

import circle from "../../assets/images/circle.png";
import bannerPot from "../../assets/images/banner-pot.png";
import bannerBox from "../../assets/images/banner-box.png";
import { Box } from "@mui/material";

function BoxAndPot() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "679px",
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
          top: "105px",
          left: "207px",
          width: "469px",
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
          width: "186px",
          height: "166px",
          borderRadius: "50%",
          backgroundColor: "accentColor.main",
          opacity: "0.4",
          top: "256px",
          right: "348px",
          boxShadow: "0 0 40px 64px #5d1499",
          position: "absolute",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "40px",
          left: "52px",
          width: "600px",
          animation: "box-levitation 2s linear infinite",
          "@keyframes box-levitation": {
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
        src={bannerBox}
      />
      <Box
        sx={{
          position: "absolute",
          right: "-8px",
          top: "-80px",
          width: "600px",
          animation: "pot-levitation 2s linear infinite",
          transform: "rotate(30deg)",
          "@keyframes pot-levitation": {
            "0%": {
              transform: "translateY(10px) rotate(30deg)",
            },
            "50%": {
              transform: "translateY(-10px) rotate(30deg)",
            },
            "100%": {
              transform: "translateY(10px) rotate(30deg)",
            },
          },
        }}
        component="img"
        src={bannerPot}
      />
    </Box>
  );
}

export default BoxAndPot;

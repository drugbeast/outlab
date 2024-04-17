import circle from "../assets/images/circle.png";
import bannerPot from "../assets/images/banner-pot.png";
import bannerBox from "../assets/images/banner-box.png";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "60%" }}>
        <Typography>Доставка</Typography>
      </Box>
      <Box sx={{ width: "40%", position: "relative" }} pr={100}>
        <Box
          sx={{
            animation: "spin1 20s linear infinite",
            width: "679px",
            height: "679px",
            "@keyframes spin1": {
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
            position: "absolute",
            right: "28.2%",
            top: "15.5%",
            width: "469px",
            height: "469px",
            animation: "spin2 20s linear infinite",
            "@keyframes spin2": {
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
        <Box
          sx={{
            width: "186px",
            height: "166px",
            borderRadius: "50%",
            background: "#5d1499",
            opacity: "0.4",
            top: "36%",
            right: "46%",
            boxShadow: "0 0 40px 60px #5d1499",
            position: "absolute",
          }}
        />
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: "20px",
              left: "-50px",
              width: "600px",
              height: "600px",
              animation: "levitation 2s linear infinite",
              "@keyframes levitation": {
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
              right: "17px",
              top: "-80px",
              width: "600px",
              height: "782px",
              transform: "rotate(30deg)",
              animation: "levitation2 2s linear infinite",
              "@keyframes levitation2": {
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
      </Box>
    </Box>
  );
}

export default Home;

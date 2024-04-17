import { Box, Typography } from "@mui/material";
import BoxAndPot from "../components/Core/BoxAndPot";

function Home() {
  return (
    <Box sx={{ display: "flex", paddingTop: "160px" }}>
      <Box sx={{ width: "52%" }}>
        <Typography></Typography>
      </Box>
      <Box sx={{ width: "48%", overflow: "hidden" }}>
        <BoxAndPot />
      </Box>
    </Box>
  );
}

export default Home;

import pineappleIce from "../assets/images/pineapple-ice.png";
import { Box, Typography } from "@mui/material";

function SliderPotCard(props) {
  const { content } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "200px",
      }}
    >
      <Typography
        fontFamily="Roboto Condensed Variable"
        fontWeight={500}
        textAlign="center"
      >
        PODONKI V1
      </Typography>
      <Box sx={{ width: "173px" }} component="img" src={pineappleIce} />
    </Box>
  );
}

export default SliderPotCard;

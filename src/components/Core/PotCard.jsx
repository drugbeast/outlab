import { Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import PropTypes from "prop-types";

PotCard.propTypes = {
  image: PropTypes.string,
  line: PropTypes.string,
  name: PropTypes.string,
};

function PotCard(props) {
  const { image, line, name } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "216px",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{ height: "640px" }} component="img" src={image} />
      <Typography
        sx={{ padding: "16px 0", lineHeight: "32px" }}
        fontFamily="Roboto Condensed Variable"
        fontWeight={500}
        textAlign="center"
      >
        {line}
      </Typography>
      <Typography
        sx={{ paddingBottom: "32px", lineHeight: "28px" }}
        fontFamily="Roboto Condensed Variable"
        fontWeight={200}
        textAlign="center"
      >
        {name}
      </Typography>
      <CustomButton variant="outlined" />
    </Box>
  );
}

export default PotCard;

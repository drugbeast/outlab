import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

import { SLIDER_PODONKI_ADDITION } from "../../constants/constants";

SliderPotCard.propTypes = {
  content: PropTypes.object
};

function SliderPotCard(props) {
  const { content } = props;
  const { image, line } = content;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
        width: "216px",
      }}
    >
      <Typography
        fontFamily="Roboto Condensed Variable"
        fontWeight={500}
        textAlign="center"
      >
        {SLIDER_PODONKI_ADDITION} {line}
      </Typography>
      <Box sx={{ height: "560px" }} component="img" src={image} />
    </Box>
  );
}

export default SliderPotCard;

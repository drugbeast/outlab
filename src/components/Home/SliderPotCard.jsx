import { Box, Typography, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

import { LARGE_MEDIA_QUERY, MEDIUM_MEDIA_QUERY, SLIDER_PODONKI_ADDITION, SMALL_MEDIA_QUERY } from "../../constants/constants";

SliderPotCard.propTypes = {
  content: PropTypes.object
};

function SliderPotCard(props) {
  const { content } = props;
  const { image, line } = content;
  const Large = useMediaQuery(LARGE_MEDIA_QUERY)
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY)
  const Small = useMediaQuery(SMALL_MEDIA_QUERY)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
        width: Small ? "100%" : "18%",
      }}
    >
      <Typography
        fontFamily="Roboto Condensed Variable"
        fontWeight={500}
        textAlign="center"
        fontSize={Large || Medium ? 20 : 24}
      >
        {SLIDER_PODONKI_ADDITION} {line}
      </Typography>
      <Box sx={{ height: Small ? "70vh" : "42vw" }} component="img" src={image} />
    </Box>
  );
}

export default SliderPotCard;

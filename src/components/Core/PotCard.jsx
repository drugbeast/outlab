import { Box, Typography, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

import {
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";
import CustomButton from "./CustomButton";

PotCard.propTypes = {
  image: PropTypes.string,
  line: PropTypes.string,
  name: PropTypes.string,
};

function PotCard(props) {
  const { image, line, name } = props;
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: Small ? "100%" : Large || Medium ? "25%" : "17%",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{ height: Small ? "70vw" : "42vw" }} component="img" src={image} />
      <Typography
        sx={{ padding: "16px 0", lineHeight: "32px" }}
        fontFamily="Roboto Condensed Variable"
        fontWeight={500}
        textAlign="center"
        fontSize={Medium ? 18 : Large ? 22 : 24}
      >
        {line}
      </Typography>
      <Typography
        sx={{ paddingBottom: "32px", lineHeight: "28px" }}
        fontFamily="Roboto Condensed Variable"
        fontWeight={200}
        textAlign="center"
        fontSize={Medium ? 18 : Large ? 22 : 24}
      >
        {name}
      </Typography>
      <CustomButton variant="outlined" />
    </Box>
  );
}

export default PotCard;

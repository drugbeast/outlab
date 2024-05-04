import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import plugPot from "../../assets/images/pot-plug.png";
import {
  HOME_POPULAR_GOODS_TITLE,
  LARGE_MEDIA_QUERY,
  LINES_LIST_TITLE,
  MEDIUM_MEDIA_QUERY,
  PATHS,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";
import { LinesContext } from "../Layout";
import CustomButton from "./CustomButton";

PotCard.propTypes = {
  image: PropTypes.string,
  line: PropTypes.string,
  name: PropTypes.string,
  section: PropTypes.string,
};

function PotCard(props) {
  const { image, line, name, section } = props;
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);

  const { setLine } = useContext(LinesContext);
  return (
    <Link
      sx={{
        display: "flex",
        flexDirection: "column",
        width:
          section == LINES_LIST_TITLE ||
          (HOME_POPULAR_GOODS_TITLE == section && Small)
            ? "100%"
            : "25%",
        alignItems: "center",
        overflow: "hidden",
      }}
      underline="none"
      component={RouterLink}
      to={PATHS.lines}
      onClick={() => setLine(line)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{ height: Small ? "70vw" : "42vw" }}
          component="img"
          src={image || plugPot}
        />
        <Box sx={{ height: "140px" }}>
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
        </Box>
        <CustomButton variant="outlined" />
      </Box>
    </Link>
  );
}

export default PotCard;

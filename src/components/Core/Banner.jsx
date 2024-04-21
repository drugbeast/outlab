import { Box, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

import {
  LARGE_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";

Banner.propTypes = {
  content: PropTypes.element,
  paddingBottom: PropTypes.string,
  boxAndPot: PropTypes.element,
};

function Banner(props) {
  const { content, paddingBottom, boxAndPot } = props;
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
      <Box
        sx={{
          display: "flex",
          padding: `${Large ? "96px" : "160px"} 0 ${paddingBottom}`,
          flexDirection: Small ? "column" : "row",
          gap: Small ? "48px" : "0px",
        }}
      >
        <Box
          sx={{
            width: Small ? "100%" : "52%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: Small ? "center" : "stretch",
            gap: "32px",
          }}
        >
          {content}
        </Box>
        <Box sx={{ width: Small ? "100%" : "48%", overflow: "hidden" }}>
          {boxAndPot}
        </Box>
      </Box>
    </Container>
  );
}

export default Banner;

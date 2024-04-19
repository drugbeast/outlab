import { Box, Container } from "@mui/material";
import PropTypes from "prop-types";

Banner.propTypes = {
  content: PropTypes.element,
  paddingBottom: PropTypes.string,
  boxAndPot: PropTypes.element,
};

function Banner(props) {
  const { content, paddingBottom, boxAndPot } = props;
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
      <Box sx={{ display: "flex", padding: `160px 0 ${paddingBottom}` }}>
        <Box
          sx={{
            width: "52%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {content}
        </Box>
        <Box sx={{ width: "48%", overflow: "hidden" }}>{boxAndPot}</Box>
      </Box>
    </Container>
  );
}

export default Banner;

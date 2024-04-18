import { Box } from "@mui/material";
import PropTypes from "prop-types";

Banner.propTypes = {
  content: PropTypes.element,
  boxAndPot: PropTypes.element,
};

function Banner(props) {
  const { content, boxAndPot } = props;
  return (
    <Box sx={{ display: "flex", padding: "160px 0 240px" }}>
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
  );
}

export default Banner;

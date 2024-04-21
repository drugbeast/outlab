import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

import {
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";
import PotCard from "./PotCard";

Goods.propTypes = {
  title: PropTypes.string,
  goods: PropTypes.array,
  line: PropTypes.string,
};

function Goods(props) {
  const { title, goods, line } = props;
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
      <Typography fontSize={Large ? 32 : Medium ? 26 : 36} textAlign={Small ? "center" : "left"}>{title}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: Large || Medium ? "center" : "space-between",
          alignItems: Small ? "center" : "stretch",
          flexDirection: Small ? "column" : "row",
          flexWrap: "wrap",
          gap: "40px 3%",
          padding: "32px 0 112px",
        }}
      >
        {goods.map((good) => (
          <PotCard
            image={good.image}
            name={good.name}
            key={good.id}
            line={!line ? good.line : line}
          />
        ))}
      </Box>
    </Container>
  );
}

export default Goods;

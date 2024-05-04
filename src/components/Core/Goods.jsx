import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

import {
  HOME_POPULAR_GOODS_TITLE,
  LARGE_MEDIA_QUERY,
  LINES_LIST_TITLE,
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
      <Typography
        fontSize={Large ? 32 : Medium ? 26 : 36}
        textAlign={Small ? "center" : "left"}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: title == HOME_POPULAR_GOODS_TITLE ? "flex" : title == LINES_LIST_TITLE ? "grid" : "grid",
          justifyContent: "center",
          flexWrap: "wrap",
          gridTemplateColumns: Small
            ? "repeat(1, 1fr)"
            : Medium
            ? "repeat(3, 1fr)"
            : Large
            ? "repeat(4, 1fr)"
            : "repeat(5, 1fr)",
          width: "100%",
          padding: "32px 0 112px",
          gap: "40px 24px",
        }}
      >
        {goods.map((good) => (
          <PotCard
            section={title}
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

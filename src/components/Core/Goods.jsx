import { Box, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";

import PotCard from "./PotCard";

Goods.propTypes = {
  title: PropTypes.string,
  goods: PropTypes.array,
  line: PropTypes.string,
};

function Goods(props) {
  const { title, goods, line } = props;
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
      <Typography fontSize={36}>{title}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
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

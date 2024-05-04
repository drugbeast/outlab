import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useContext } from "react";

import bannerBox from "../assets/images/banner-box.png";
import bannerPot from "../assets/images/banner-pot.png";
import LinesBannerContent from "../components/BannerContents/LinesBannerContent";
import BoxAndPot from "../components/BoxAndPot";
import Banner from "../components/Core/Banner";
import Goods from "../components/Core/Goods";
import { LinesContext } from "../components/Layout";
import { LINES, LINES_LIST_TITLE } from "../constants/constants";
import { MEDIUM_MEDIA_QUERY, SMALL_MEDIA_QUERY } from "../constants/constants";

function Lines() {
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);

  const { line } = useContext(LinesContext);
  return (
    <>
      <Box>
        <Banner
          content={<LinesBannerContent title={line} />}
          paddingBottom={Medium ? "75px" : Small ? "45px" : "100px"}
          boxAndPot={
            <BoxAndPot
              imageFirst={bannerBox}
              imageSecond={bannerPot}
              leftFirst="3%"
              topFirst="3%"
              widthFirst="72%"
              widthSecond="68%"
              rightSecond="-1%"
              topSecond="-10%"
              section="lines"
            />
          }
        />
      </Box>
      <Box>
        <Goods
          title={LINES_LIST_TITLE}
          goods={
            LINES.map((brand) => {
              if (brand.id != "vliq-lines") {
                return brand.items.filter((item) => item.name == line);
              }
              if (brand.id == "vliq-lines") {
                const thirtyMlSearch = brand.items.thirtyML.filter(
                  (item) => item.name == line
                );
                const oneHundredAndTwentyMLSearch =
                  brand.items.oneHundredAndTwentyML.filter(
                    (item) => item.name == line
                  );
                if (thirtyMlSearch.length == 0) {
                  return oneHundredAndTwentyMLSearch;
                }
                return thirtyMlSearch;
              }
            }).filter((arr) => arr.length != 0)[0][0].goods
          }
          line={line}
        />
      </Box>
    </>
  );
}

export default Lines;

import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import bannerBox from "../assets/images/banner-box.png";
import bannerPot from "../assets/images/banner-pot.png";
import LinesBannerContent from "../components/BannerContents/LinesBannerContent";
import BoxAndPot from "../components/BoxAndPot";
import Banner from "../components/Core/Banner";
import Goods from "../components/Core/Goods";
import { LINES_LIST_TITLE } from "../constants/constants";
import { MEDIUM_MEDIA_QUERY, SMALL_MEDIA_QUERY } from "../constants/constants";
import { LINES } from "../constants/lines";

function Lines() {
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  return (
    <>
      <Box>
        <Banner
          content={<LinesBannerContent />}
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
          goods={LINES.anarchy.pots}
          line={LINES.anarchy.line}
        />
      </Box>
    </>
  );
}

export default Lines;

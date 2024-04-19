import { Box } from "@mui/material";
import Banner from "../components/Core/Banner";
import LinesBannerContent from "../components/BannerContents/LinesBannerContent";
import BoxAndPot from "../components/BoxAndPot";
import bannerPot from "../assets/images/banner-pot.png";
import bannerBox from "../assets/images/banner-box.png";
import { LINES_LIST_TITLE } from "../constants/constants";
import { LINES } from "../constants/lines";
import Goods from "../components/Core/Goods"

function Lines() {
  return (
    <>
      <Box>
        <Banner
          content={<LinesBannerContent />}
          paddingBottom="0px"
          boxAndPot={
            <BoxAndPot
              imageFirst={bannerBox}
              imageSecond={bannerPot}
              leftFirst="52px"
              topFirst="40px"
              widthSecond="600px"
              rightSecond="-8px"
              topSecond="-80px"
              section="lines"
            />
          }
        />
      </Box>
      <Box>
        <Goods title={LINES_LIST_TITLE} goods={LINES.anarchy.pots} line={LINES.anarchy.line} />
      </Box>
    </>
  );
}

export default Lines;

import { Box, Container,Typography } from "@mui/material";

import boxFirst from "../assets/images/home-banner-box-first.png";
import boxSecond from "../assets/images/home-banner-box-second.png";
import HomeBannerContent from "../components/BannerContents/HomeBannerContent";
import BoxAndPot from "../components/BoxAndPot";
import Banner from "../components/Core/Banner";
import Goods from "../components/Core/Goods";
import RunningLineBlock from "../components/Home/RunningLineBlock";
import Slider from "../components/Home/Slider/Slider";
import WarningBlock from "../components/Home/WarningBlock";
import {
  HOME_OUR_LINES_TITLE,
  HOME_POPULAR_GOODS_TITLE,
  HOME_REVIEWS_TITLE,
  HOME_SLIDER_REVIEWS,
} from "../constants/constants";
import { POPULAR_GOODS, SLIDER_POTS } from "../constants/lines";

function Home() {
  return (
    <>
      <Box>
        <Banner
          content={<HomeBannerContent />}
          paddingBottom="0px"
          boxAndPot={
            <BoxAndPot
              imageFirst={boxFirst}
              imageSecond={boxSecond}
              leftFirst="29%"
              topFirst="-4%"
              widthFirst="68%"
              widthSecond="40%"
              rightSecond="45%"
              topSecond="6%"
              section="home"
            />
          }
        />
      </Box>
      <Box sx={{ paddingTop: "48px" }}>
        <Goods title={HOME_POPULAR_GOODS_TITLE} goods={POPULAR_GOODS} />
      </Box>
      <Box
        sx={{
          backgroundColor: "whiteColor.main",
          padding: "16px 0",
        }}
      >
        <WarningBlock />
      </Box>
      <Box sx={{ paddingTop: "56px" }}>
        <RunningLineBlock />
      </Box>
      <Box sx={{paddingTop: "48px"}}>
        <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
          <Typography fontSize={36}>{HOME_OUR_LINES_TITLE}</Typography>
          <Slider contentType="pots" slidesPerView={5} slidesContent={SLIDER_POTS} />
        </Container>
      </Box>
      <Box sx={{paddingTop: "64px", paddingBottom: "64px"}}>
        <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
          <Typography fontSize={36}>{HOME_REVIEWS_TITLE}</Typography>
          <Slider contentType="videos" slidesPerView={3} slidesContent={HOME_SLIDER_REVIEWS} />
        </Container>
      </Box>
    </>
  );
}

export default Home;

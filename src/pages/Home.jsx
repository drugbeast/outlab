import { Box, Typography, Container } from "@mui/material";
import BoxAndPot from "../components/BoxAndPot";
import boxFirst from "../assets/images/home-banner-box-first.png";
import boxSecond from "../assets/images/home-banner-box-second.png";
import HomeBannerContent from "../components/BannerContents/HomeBannerContent";
import Banner from "../components/Core/Banner";
import {
  HOME_OUR_LINES_TITLE,
  HOME_POPULAR_GOODS_TITLE,
  HOME_REVIEWS_TITLE,
  HOME_SLIDER_REVIEWS,
} from "../constants/constants";
import { POPULAR_GOODS, SLIDER_POTS } from "../constants/lines";
import Goods from "../components/Core/Goods";
import WarningBlock from "../components/Home/WarningBlock";
import RunningLineBlock from "../components/Home/RunningLineBlock";
import Slider from "../components/Home/Slider/Slider";

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
              leftFirst="260px"
              topFirst="-40px"
              widthSecond="350px"
              rightSecond="392px"
              topSecond="80px"
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
          <Slider contentType="pots" slidesContent={SLIDER_POTS} />
        </Container>
      </Box>
      <Box sx={{paddingTop: "64px", paddingBottom: "64px"}}>
        <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
          <Typography fontSize={36}>{HOME_REVIEWS_TITLE}</Typography>
          <Slider contentType="videos" slidesContent={HOME_SLIDER_REVIEWS} />
        </Container>
      </Box>
    </>
  );
}

export default Home;

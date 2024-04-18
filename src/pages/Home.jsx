import { Box } from "@mui/material";
import BoxAndPot from "../components/BoxAndPot";
import boxFirst from "../assets/images/home-banner-box-first.png";
import boxSecond from "../assets/images/home-banner-box-second.png";
import HomeBannerContent from "../components/BannerContents/HomeBannerContent";
import Banner from "../components/Core/Banner";
import PotCard from "../components/Core/PotCard"

function Home() {
  return (
    <>
      <Banner
        content={<HomeBannerContent />}
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
      <Box>
        <PotCard />
      </Box>
    </>
  );
}

export default Home;

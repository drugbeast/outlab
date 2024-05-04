import { Box, useMediaQuery } from "@mui/material";
import { useContext } from "react";

import bannerBox from "../assets/images/banner-box.png";
import bannerPot from "../assets/images/banner-pot.png";
import LinesBannerContent from "../components/BannerContents/LinesBannerContent";
import BoxAndPot from "../components/BoxAndPot";
import Banner from "../components/Core/Banner";
import Goods from "../components/Core/Goods";
import { DevicesContext } from "../components/Layout";
import {
  DEVICES,
  LINES_LIST_TITLE,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../constants/constants";

function Devices() {
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);

  const { devicesSeries } = useContext(DevicesContext);
  return (
    <>
      <Box>
        <Banner
          content={<LinesBannerContent title={devicesSeries} />}
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
            DEVICES.map((brand) => {
              return brand.items.filter((item) => item.name == devicesSeries);
            }).filter((arr) => arr.length != 0)[0][0].goods
          }
          line={devicesSeries}
        />
      </Box>
    </>
  );
}

export default Devices;

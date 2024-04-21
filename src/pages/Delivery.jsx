import useMediaQuery from "@mui/material/useMediaQuery";

import bannerBox from "../assets/images/banner-box.png";
import bannerPot from "../assets/images/banner-pot.png";
import DeliveryBannerContent from "../components/BannerContents/DeliveryBannerContent";
import BoxAndPot from "../components/BoxAndPot";
import Banner from "../components/Core/Banner";
import {
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY} from "../constants/constants";

function Delivery() {
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  const Large = useMediaQuery(LARGE_MEDIA_QUERY)
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY)
  return (
    <Banner
      content={<DeliveryBannerContent />}
      paddingBottom={Large ? "160px" : Medium ? "80px" : Small ? "60px" : "240px"}
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
          section="delivery"
        />
      }
    />
  );
}

export default Delivery;

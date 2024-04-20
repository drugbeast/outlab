import bannerBox from "../assets/images/banner-box.png";
import bannerPot from "../assets/images/banner-pot.png";
import DeliveryBannerContent from "../components/BannerContents/DeliveryBannerContent";
import BoxAndPot from "../components/BoxAndPot";
import Banner from "../components/Core/Banner";

function Delivery() {
  return (
    <Banner
      content={<DeliveryBannerContent />}
      paddingBottom="240px"
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

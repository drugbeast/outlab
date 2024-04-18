import BoxAndPot from "../components/BoxAndPot";
import bannerPot from "../assets/images/banner-pot.png";
import bannerBox from "../assets/images/banner-box.png";
import Banner from "../components/Core/Banner";
import DeliveryBannerContent from "../components/BannerContents/DeliveryBannerContent";

function Delivery() {
  return (
    <Banner
      content={<DeliveryBannerContent />}
      boxAndPot={
        <BoxAndPot
          imageFirst={bannerBox}
          imageSecond={bannerPot}
          leftFirst="52px"
          topFirst="40px"
          widthSecond="600px"
          rightSecond="-8px"
          topSecond="-80px"
          section="delivery"
        />
      }
    />
  );
}

export default Delivery;

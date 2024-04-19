import { Box, Typography, Container } from "@mui/material";
import BoxAndPot from "../components/BoxAndPot";
import boxFirst from "../assets/images/home-banner-box-first.png";
import boxSecond from "../assets/images/home-banner-box-second.png";
import HomeBannerContent from "../components/BannerContents/HomeBannerContent";
import Banner from "../components/Core/Banner";
import PotCard from "../components/Core/PotCard";
import SliderPotCard from "../components/SliderPotCard";
import {
  HOME_POPULAR_GOODS_TITLE,
  HOME_WARNING_BLOCK_TITLE,
  HOME_WARNING_BLOCK_TEXT,
  HOME_TICKER_TEXT,
  HOME_OUR_LINES_TITLE,
} from "../constants/constants";
import promotional from "../assets/videos/promotional.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "./Home.css"

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
        <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
          <Typography fontSize={36}>{HOME_POPULAR_GOODS_TITLE}</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "32px 0 112px",
            }}
          >
            <PotCard />
            <PotCard />
            <PotCard />
            <PotCard />
            <PotCard />
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "whiteColor.main",
          padding: "16px 0",
        }}
      >
        <Typography
          fontSize={56}
          color="accentColor.main"
          fontWeight={700}
          fontStyle="italic"
          textAlign="center"
        >
          {HOME_WARNING_BLOCK_TITLE}
        </Typography>
        <Typography
          sx={{ marginTop: "16px" }}
          fontSize={36}
          color="accentColor.main"
          fontWeight={400}
          textAlign="center"
        >
          {HOME_WARNING_BLOCK_TEXT}
        </Typography>
      </Box>
      <Box sx={{ paddingTop: "56px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            height: "500px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              height: "80px",
              backgroundColor: "accentColor.main",
              transform: "rotate(-10deg)",
              width: "120%",
              position: "absolute",
              overflow: "hidden",
              top: "180px",
              left: "-30px",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              "@keyframes ticker": {
                "0%": {
                  transform: "translateX(0)",
                },
                "100%": {
                  transform: "translateX(-100%)",
                },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                animation: "ticker 10s linear infinite",
              }}
            >
              {HOME_TICKER_TEXT.map((item) => (
                <Typography
                  key={item.id}
                  sx={{
                    padding: "0 120px",
                    fontSize: "36px",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                animation: "ticker 10s linear infinite",
              }}
            >
              {HOME_TICKER_TEXT.map((item) => (
                <Typography
                  key={item.id}
                  sx={{
                    padding: "0 120px",
                    fontSize: "36px",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Box>
          </Box>
          <video autoPlay loop muted style={{ width: "100%" }}>
            <source src={promotional} type="video/mp4" />
          </video>
        </Box>
      </Box>
      <Box>
        <Box sx={{ padding: "100px 0" }}>
          <Typography>{HOME_OUR_LINES_TITLE}</Typography>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar]}
          >
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderPotCard />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default Home;

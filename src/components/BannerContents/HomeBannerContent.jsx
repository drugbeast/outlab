import { Typography } from "@mui/material";

import CustomButton from "../../components/Core/CustomButton";
import {
  HOME_BANNER_BRANDS,
  HOME_BANNER_INFORMATION_TEXT,
  HOME_BANNER_TITLE,
} from "../../constants/constants";

function HomeBannerContent() {
  return (
    <>
      <Typography>{HOME_BANNER_BRANDS}</Typography>
      <Typography
        fontWeight={800}
        fontSize={52}
        fontStyle="italic"
      >
        {HOME_BANNER_TITLE}
      </Typography>
      <Typography fontSize={36}>
        {HOME_BANNER_INFORMATION_TEXT}
      </Typography>
      <CustomButton variant="outlined" />
    </>
  );
}

export default HomeBannerContent;

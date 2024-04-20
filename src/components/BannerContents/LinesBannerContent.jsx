import { Typography } from "@mui/material";

import CustomButton from "../../components/Core/CustomButton";
import {
  LINES_BANNER_TEXT,
  LINES_BANNER_TITLE} from "../../constants/constants";

function LinesBannerContent() {
  return (
    <>
      <Typography
        fontWeight={800}
        fontSize={52}
        fontStyle="italic"
      >
        {LINES_BANNER_TITLE}
      </Typography>
      <Typography fontSize={36}>
        {LINES_BANNER_TEXT}
      </Typography>
      <CustomButton variant="outlined" />
    </>
  )
}

export default LinesBannerContent
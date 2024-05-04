import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

import CustomButton from "../../components/Core/CustomButton";
import {
  LARGE_MEDIA_QUERY,
  LINES_BANNER_TEXT,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";

LinesBannerContent.propTypes = {
  title: PropTypes.string,
};

function LinesBannerContent({ title }) {
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <>
      <Typography
        fontWeight={800}
        fontSize={Small ? 46 : Large ? 42 : Medium ? 36 : 52}
        fontStyle="italic"
        textAlign={Small ? "center" : "left"}
      >
        {title}
      </Typography>
      <Typography
        fontSize={Small ? 24 : Medium ? 20 : Large ? 24 : 36}
        textAlign={Small ? "center" : "left"}
      >
        {LINES_BANNER_TEXT}
      </Typography>
      <CustomButton variant="outlined" />
    </>
  );
}

export default LinesBannerContent;

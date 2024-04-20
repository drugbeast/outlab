import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

import {
  BUTTON_TEXT,
  CONTAINED_BUTTON_STYLES,
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  OUTLINED_BUTTON_STYLES,
  SMALL_MEDIA_QUERY,
} from "../../constants/constants";

CustomButton.propTypes = {
  variant: PropTypes.string,
};

function CustomButton(props) {
  const { variant } = props;
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <Button
      variant={variant}
      sx={
        variant == "outlined"
          ? OUTLINED_BUTTON_STYLES(Large, Medium, Small)
          : variant == "contained"
          ? CONTAINED_BUTTON_STYLES(Large, Medium, Small)
          : {}
      }
      disableRipple
      disableElevation
      href="https://t.me/opt_distr"
    >
      {BUTTON_TEXT}
    </Button>
  );
}

export default CustomButton;

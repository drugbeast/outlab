import { Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from "prop-types";

import {
  BUTTON_TEXT,
  CONTAINED_BUTTON_STYLES,
  LARGE_MEDIA_QUERY,
  OUTLINED_BUTTON_STYLES,
  XLARGE_MEDIA_QUERY
} from "../../constants/constants";

CustomButton.propTypes = {
  variant: PropTypes.string,
};

function CustomButton(props) {
  const { variant } = props;
  const Large = useMediaQuery(LARGE_MEDIA_QUERY)
  const XLarge = useMediaQuery(XLARGE_MEDIA_QUERY)
  return (
    <Button
      variant={variant}
      sx={
        variant == "outlined"
          ? OUTLINED_BUTTON_STYLES(Large, XLarge)
          : variant == "contained"
          ? CONTAINED_BUTTON_STYLES(Large, XLarge)
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

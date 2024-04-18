import PropTypes from "prop-types";
import { Button } from "@mui/material";
import {
  CONTAINED_BUTTON_STYLES,
  OUTLINED_BUTTON_STYLES,
  BUTTON_TEXT,
} from "../../constants/constants";

CustomButton.propTypes = {
  variant: PropTypes.string,
};

function CustomButton(props) {
  const { variant } = props;
  return (
    <Button
      variant={variant}
      sx={
        variant == "outlined"
          ? OUTLINED_BUTTON_STYLES
          : variant == "contained"
          ? CONTAINED_BUTTON_STYLES
          : {}
      }
      disableRipple
      disableElevation
    >
      {BUTTON_TEXT}
    </Button>
  );
}

export default CustomButton;

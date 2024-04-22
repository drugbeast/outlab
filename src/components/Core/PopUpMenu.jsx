import { Link, Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import { LinesContext } from "../Layout";

PopUpMenu.propTypes = {
  setAnchorEl: PropTypes.func,
  anchorEl: PropTypes.object,
  open: PropTypes.bool,
  labelledBy: PropTypes.string,
  content: PropTypes.array,
  path: PropTypes.string,
};

function PopUpMenu(props) {
  const { setAnchorEl, anchorEl, open, labelledBy, content, path } = props;

  const { setLine } = useContext(LinesContext);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      id={labelledBy == "devices" ? "devices-menu" : "lines-menu"}
      anchorEl={anchorEl}
      open={open}
      MenuListProps={{
        "aria-labelledby": labelledBy,
        sx: {
          fontFamily: "FuturaPT",
          backgroundColor: "bgColor.main",
          border: "1px solid",
          borderColor: "whiteColor.main",
          borderRadius: "5px",
          padding: 0,
        },
      }}
      onClose={handleClose}
    >
      <Link
        sx={{ cursor: "pointer" }}
        to={path}
        component={RouterLink}
        underline="none"
      >
        {content.map((item) => (
          <MenuItem
            sx={{
              fontFamily: "Roboto Condensed Variable",
              fontWeight: 600,
              color: "whiteColor.main",
              borderBottom: "1px solid",
              borderColor: "whiteColor.main",
              fontSize: "18px",
              "&:hover": {
                backgroundColor: "whiteColor.main",
                color: "bgColor.main",
              },
            }}
            key={item.id}
            onClick={() => {
              handleClose();
              setLine(item.name);
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </Link>
    </Menu>
  );
}

export default PopUpMenu;

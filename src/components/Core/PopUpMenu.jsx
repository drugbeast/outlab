import MenuIcon from "@mui/icons-material/Menu";
import { Link, Menu, MenuItem } from "@mui/material";
import { NestedMenuItem } from "mui-nested-menu";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import { DevicesContext, LinesContext } from "../Layout";

PopUpMenu.propTypes = {
  setAnchorEl: PropTypes.func,
  anchorEl: PropTypes.object,
  open: PropTypes.bool,
  labelledBy: PropTypes.string,
  content: PropTypes.array,
  contentType: PropTypes.string,
  path: PropTypes.string,
};

function PopUpMenu(props) {
  const {
    setAnchorEl,
    anchorEl,
    open,
    labelledBy,
    content,
    contentType,
    path,
  } = props;

  const { setLine } = useContext(LinesContext);
  const { setSeries } = useContext(DevicesContext);

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
          backgroundColor: "bgColor.main",
          border: "2px solid",
          borderColor: "accentColor.main",
          padding: "8px",
          "& li": {
            padding: "4px",
          },
          "& li div": {
            paddingRight: "6px",
          },
        },
      }}
      onClose={handleClose}
    >
      {content.map((item) => (
        <NestedMenuItem
          sx={{
            "& p": {
              fontFamily: "Roboto Condensed Variable",
              fontWeight: 500,
              color: "whiteColor.main",
              fontSize: "18px",
              padding: 0,
              backgroundColor: "bgColor.main",
            },
            backgroundColor: "bgColor.main",
          }}
          rightIcon={<MenuIcon sx={{ color: "whiteColor.main" }} />}
          label={item.brand}
          key={item.id}
          parentMenuOpen={open}
        >
          {item.id == "vliq-lines" && contentType == "lines" ? (
            <>
              <NestedMenuItem
                label="30 МЛ"
                sx={{
                  "& p": {
                    fontFamily: "Roboto Condensed Variable",
                    fontWeight: 500,
                    color: "whiteColor.main",
                    fontSize: "18px",
                    padding: "0px 8px",
                    backgroundColor: "bgColor.main",
                  },
                  backgroundColor: "bgColor.main",
                  borderColor: "whiteColor.main",
                }}
                rightIcon={<MenuIcon sx={{ color: "whiteColor.main" }} />}
                parentMenuOpen={open}
              >
                {item.items.thirtyML.map((category) => (
                  <Link
                    sx={{ cursor: "pointer" }}
                    to={path}
                    component={RouterLink}
                    underline="none"
                    key={category.id}
                    onClick={() => {
                      setLine(category.name);
                      handleClose();
                    }}
                  >
                    <MenuItem
                      sx={{
                        fontFamily: "Roboto Condensed Variable",
                        fontWeight: 600,
                        backgroundColor: "bgColor.main",
                        color: "whiteColor.main",
                        fontSize: "18px",
                        padding: "4px 16px",
                      }}
                    >
                      {category.name}
                    </MenuItem>
                  </Link>
                ))}
              </NestedMenuItem>
              <NestedMenuItem
                label="120 МЛ"
                sx={{
                  "& p": {
                    fontFamily: "Roboto Condensed Variable",
                    fontWeight: 500,
                    color: "whiteColor.main",
                    fontSize: "18px",
                    padding: "0px 8px",
                    backgroundColor: "bgColor.main",
                  },
                  backgroundColor: "bgColor.main",
                  borderColor: "whiteColor.main",
                }}
                rightIcon={<MenuIcon sx={{ color: "whiteColor.main" }} />}
                parentMenuOpen={open}
              >
                {item.items.oneHundredAndTwentyML.map((category) => (
                  <Link
                    sx={{ cursor: "pointer" }}
                    to={path}
                    component={RouterLink}
                    underline="none"
                    key={category.id}
                    onClick={() => {
                      setLine(category.name);
                      handleClose();
                    }}
                  >
                    <MenuItem
                      sx={{
                        fontFamily: "Roboto Condensed Variable",
                        fontWeight: 600,
                        backgroundColor: "bgColor.main",
                        color: "whiteColor.main",
                        fontSize: "18px",
                        padding: "4px 16px",
                      }}
                    >
                      {category.name}
                    </MenuItem>
                  </Link>
                ))}
              </NestedMenuItem>
            </>
          ) : item.items.length ? (
            item.items.map((line) => (
              <Link
                sx={{ cursor: "pointer", backgroundColor: "red" }}
                to={path}
                component={RouterLink}
                underline="none"
                key={line.id}
              >
                <MenuItem
                  key={line.id}
                  sx={{
                    fontFamily: "Roboto Condensed Variable",
                    fontWeight: 600,
                    backgroundColor: "bgColor.main",
                    padding: "4px 16px",
                    color: "whiteColor.main",
                    fontSize: "18px",
                  }}
                  onClick={() => {
                    handleClose();
                    contentType == "devices"
                      ? setSeries(line.name)
                      : contentType == "lines"
                      ? setLine(line.name)
                      : null;
                  }}
                >
                  {line.name}
                </MenuItem>
              </Link>
            ))
          ) : (
            <MenuItem
              sx={{
                fontFamily: "Roboto Condensed Variable",
                fontWeight: 600,
                backgroundColor: "bgColor.main",
                padding: "4px 16px",
                color: "whiteColor.main",
                fontSize: "18px",
              }}
              onClick={() => {
                handleClose();
              }}
            >
              НИЧЕГО НЕТ!
            </MenuItem>
          )}
        </NestedMenuItem>
      ))}
    </Menu>
  );
}

export default PopUpMenu;

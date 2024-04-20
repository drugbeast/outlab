import MenuIcon from "@mui/icons-material/Menu";
import { Box, Link, List } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import {
  HEADER_NAVS,
  LARGE_MEDIA_QUERY,
  XLARGE_MEDIA_QUERY,
} from "../../constants/constants.jsx";
import CustomButton from "./CustomButton";

BurgerMenu.propTypes = {
  setOpen: PropTypes.func,
};

function BurgerMenu(props) {
  const { setOpen } = props;
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const XLarge = useMediaQuery(XLARGE_MEDIA_QUERY);
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          backgroundColor: "bgColor.main",
          width: "100vw",
          height: "100vh",
          top: "125px",
          left: 0,
          zIndex: 1000,
        }}
      >
        <Box>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
              paddingTop: "80px",
            }}
          >
            {HEADER_NAVS.map((nav) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(false)}
                key={nav.id}
              >
                <Link
                  sx={{
                    fontFamily: "Roboto Condensed Variable",
                    fontSize: XLarge ? "24px" : Large ? "20px" : "24px",
                    fontWeight: 500,
                  }}
                  color="whiteColor.main"
                  underline="none"
                  component={RouterLink}
                  to={nav.path}
                >
                  {nav.text}
                </Link>
                {nav.id < 3 && <MenuIcon sx={{ color: "whiteColor.main" }} />}
              </Box>
            ))}
          </List>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", paddingTop: "24px" }}
        >
          <CustomButton variant="contained" />
        </Box>
      </Box>
    </>
  );
}

export default BurgerMenu;

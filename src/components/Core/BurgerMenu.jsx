import { Box, Link, List } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  DEVICES,
  HEADER_NAVS,
  LINES,
  MEDIUM_MEDIA_QUERY,
} from "../../constants/constants.jsx";
import BurgerAccordion from "./BurgerAccordion.jsx";
import CustomButton from "./CustomButton";

BurgerMenu.propTypes = {
  setOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

function BurgerMenu(props) {
  const { setOpen, isOpen } = props;
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
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
          transform: isOpen ? "translateX(0%)" : "translateX(130%)",
          transition: "transform 0.5s ease-out",
          paddingTop: "40px",
        }}
      >
        <Box sx={{ overflowY: "scroll", height: "66vh" }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
              paddingTop: "60px",
            }}
          >
            {HEADER_NAVS.map((nav) => (
              <Fragment key={nav.id}>
                {nav.id == 4 && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <Link
                      sx={{
                        fontFamily: "Roboto Condensed Variable",
                        fontSize: Medium ? "20px" : "24px",
                        fontWeight: 500,
                      }}
                      color="whiteColor.main"
                      underline="none"
                      component={RouterLink}
                      to={nav.path}
                    >
                      {nav.text}
                    </Link>
                  </Box>
                )}
                {nav.id < 3 && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <BurgerAccordion
                      content={nav.id == 1 ? DEVICES : nav.id == 2 ? LINES : []}
                      text={nav.text}
                      setOpen={setOpen}
                      path={nav.path}
                      contentType={
                        nav.id == 1 ? "devices" : nav.id == 2 ? "lines" : ""
                      }
                    />
                  </Box>
                )}
                {nav.id == 3 && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <Link
                      sx={{
                        fontFamily: "Roboto Condensed Variable",
                        fontSize: Medium ? "20px" : "24px",
                        fontWeight: 500,
                      }}
                      color="whiteColor.main"
                      underline="none"
                      href="#popularGoods"
                    >
                      {nav.text}
                    </Link>
                  </Box>
                )}
                {nav.id == 5 && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <Link
                      sx={{
                        fontFamily: "Roboto Condensed Variable",
                        fontSize: Medium ? "20px" : "24px",
                        fontWeight: 500,
                      }}
                      color="whiteColor.main"
                      underline="none"
                      href="#footer"
                    >
                      {nav.text}
                    </Link>
                  </Box>
                )}
              </Fragment>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "24px",
            }}
          >
            <CustomButton variant="contained" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BurgerMenu;

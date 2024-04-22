import {
  Box,
  Link,
  List,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";

import {  HEADER_DEVICES,
HEADER_LINES, 
  HEADER_NAVS,
  MEDIUM_MEDIA_QUERY,
} from "../../constants/constants.jsx";
import BurgerAccordion from "./BurgerAccordion.jsx";
import CustomButton from "./CustomButton";

BurgerMenu.propTypes = {
  setOpen: PropTypes.func,
};

function BurgerMenu(props) {
  const { setOpen } = props;
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
              paddingTop: "60px",
              overflowY: "scroll",
            }}
          >
            {HEADER_NAVS.map((nav) => (
              <Fragment key={nav.id}>
                {nav.id > 2 && (
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
                      content={nav.id == 1 ? HEADER_DEVICES : nav.id == 2 ? HEADER_LINES : []}
                      text={nav.text}
                      setOpen={setOpen}
                      path={nav.path}
                    />
                  </Box>
                )}
              </Fragment>
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

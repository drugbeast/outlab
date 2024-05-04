import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Container,
  IconButton,
  Link,
  List,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../assets/icons/logo.svg?react";
import {
  DEVICES,
  HEADER_NAVS,
  LARGE_MEDIA_QUERY,
  LINES,
  MEDIUM_MEDIA_QUERY,
  PATHS,
  SMALL_MEDIA_QUERY,
} from "../constants/constants.jsx";
import BurgerMenu from "./Core/BurgerMenu";
import CustomButton from "./Core/CustomButton";
import PopUpMenu from "./Core/PopUpMenu";

function Header() {
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);

  const [isOpen, setOpen] = useState(false);

  const [devicesAnchorEl, setDevicesAnchorEl] = useState(null);
  const [linesAnchorEl, setLinesAnchorEl] = useState(null);

  const openDevicesMenu = Boolean(devicesAnchorEl);
  const openLinesMenu = Boolean(linesAnchorEl);

  const handleClickDevicesLink = (e) => {
    setDevicesAnchorEl(e.currentTarget);
  };

  const handleClickLinesLink = (e) => {
    setLinesAnchorEl(e.currentTarget);
  };

  return (
    <Box
      sx={
        Medium || Small
          ? {
              position: "fixed",
              display: "flex",
              backgroundColor: "bgColor.main",
              justifyContent: "space-between",
              width: "100vw",
              zIndex: 1000,
            }
          : null
      }
    >
      <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          pt="32px"
        >
          <Link
            sx={{ cursor: "pointer" }}
            underline="none"
            component={RouterLink}
            to={PATHS.home}
            onClick={() => setOpen(false)}
          >
            <Logo width={Large || Medium || Small ? "150px" : "193px"} />
          </Link>
          {Medium || Small ? (
            <>
              <BurgerMenu setOpen={setOpen} isOpen={isOpen} />
              <IconButton
                sx={{
                  "& svg": {
                    fontSize: 48,
                  },
                  cursor: "pointer",
                }}
                onClick={() => setOpen(!isOpen)}
              >
                {!isOpen ? (
                  <MenuIcon sx={{ color: "whiteColor.main" }} />
                ) : (
                  <CloseIcon sx={{ color: "whiteColor.main" }} />
                )}
              </IconButton>
            </>
          ) : (
            <>
              <List
                sx={{
                  display: "flex",
                  gap: Large ? "24px" : "48px",
                  alignItems: "center",
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
                    key={nav.id}
                    id={nav.id == 1 ? "devices" : nav.id == 2 ? "lines" : ""}
                    onClick={
                      nav.id == 1
                        ? handleClickDevicesLink
                        : nav.id == 2
                        ? handleClickLinesLink
                        : ""
                    }
                    aria-controls={
                      nav.id == 1 && openDevicesMenu
                        ? "devices-menu"
                        : nav.id == 2 && openLinesMenu
                        ? "lines-menu"
                        : undefined
                    }
                    aria-haspopup={
                      nav.id == 1 || nav.id == 2 ? "true" : undefined
                    }
                    aria-expanded={
                      (nav.id == 1 && openDevicesMenu) ||
                      (nav.id == 2 && openLinesMenu)
                        ? "true"
                        : undefined
                    }
                  >
                    {nav.id < 3 ? (
                      <Typography
                        sx={{
                          fontFamily: "Roboto Condensed Variable",
                          fontSize: Large ? "20px" : "24px",
                          fontWeight: 500,
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                        color="whiteColor.main"
                      >
                        {nav.text}
                      </Typography>
                    ) : nav.id == 3 ? (
                      <Link
                        href="#popularGoods"
                        sx={{
                          fontFamily: "Roboto Condensed Variable",
                          fontSize: Large ? "20px" : "24px",
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                        color="whiteColor.main"
                        underline="none"
                      >
                        {nav.text}
                      </Link>
                    ) : nav.id == 5 ? (
                      <Link
                        href="#footer"
                        sx={{
                          fontFamily: "Roboto Condensed Variable",
                          fontSize: Large ? "20px" : "24px",
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                        color="whiteColor.main"
                        underline="none"
                      >
                        {nav.text}
                      </Link>
                    ) : (
                      <Link
                        sx={{
                          fontFamily: "Roboto Condensed Variable",
                          fontSize: Large ? "20px" : "24px",
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                        color="whiteColor.main"
                        underline="none"
                        component={RouterLink}
                        to={nav.path}
                      >
                        {nav.text}
                      </Link>
                    )}
                    {nav.id < 3 && (
                      <MenuIcon sx={{ color: "whiteColor.main" }} />
                    )}
                    <PopUpMenu
                      setAnchorEl={setLinesAnchorEl}
                      anchorEl={linesAnchorEl}
                      open={openLinesMenu}
                      labelledBy="lines"
                      content={LINES}
                      contentType="lines"
                      path={PATHS.lines}
                    />
                    <PopUpMenu
                      setAnchorEl={setDevicesAnchorEl}
                      anchorEl={devicesAnchorEl}
                      open={openDevicesMenu}
                      labelledBy="devices"
                      content={DEVICES}
                      contentType="devices"
                      path={PATHS.devices}
                    />
                  </Box>
                ))}
              </List>
              <CustomButton variant="contained" />
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Header;

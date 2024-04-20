import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container, IconButton, Link, List } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../assets/icons/logo.svg?react";
import {
  HEADER_NAVS,
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  PATHS,
  SMALL_MEDIA_QUERY,
} from "../constants/constants.jsx";
import BurgerMenu from "./Core/BurgerMenu";
import CustomButton from "./Core/CustomButton";

function Header() {
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  const [isOpen, setOpen] = useState(false);
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
          >
            <Logo width={Large || Medium || Small ? "150px" : "193px"} />
          </Link>
          {Medium || Small ? (
            <>
              {isOpen ? <BurgerMenu setOpen={setOpen} /> : null}
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
                  >
                    <Link
                      sx={{
                        fontFamily: "Roboto Condensed Variable",
                        fontSize: Large ? "20px" : "24px",
                        fontWeight: 500,
                      }}
                      color="whiteColor.main"
                      underline="none"
                      component={RouterLink}
                      to={nav.path}
                    >
                      {nav.text}
                    </Link>
                    {nav.id < 3 && (
                      <MenuIcon sx={{ color: "whiteColor.main" }} />
                    )}
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

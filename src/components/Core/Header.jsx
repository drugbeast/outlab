import Logo from "../../assets/icons/logo.svg?react";
import { Box, Link, List, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { HEADER_NAVS, HEADER_BUTTON_TEXT } from "../../constants/constants.jsx";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} pt="32px">
      <Logo />
      <List sx={{ display: "flex", gap: "48px", alignItems: "center" }}>
        {HEADER_NAVS.map((nav) => (
          <Box
            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
            key={nav.id}
          >
            <Link
              sx={{
                fontFamily: "Roboto Condensed Variable",
                fontSize: "24px",
                fontWeight: 500,
              }}
              color="textColor.main"
              underline="none"
              component={RouterLink}
              to="/"
            >
              {nav.text}
            </Link>
            {nav.id < 3 && <MenuIcon sx={{ color: "textColor.main" }} />}
          </Box>
        ))}
      </List>
      <Button
        variant="contained"
        sx={{
          height: "fit-content",
          fontFamily: "Roboto Condensed Variable",
          padding: "16px 56px",
          fontSize: "20px",
          fontWeight: 700,
          backgroundColor: "accentColor.main",
          borderRadius: "0px",
        }}
      >
        {HEADER_BUTTON_TEXT}
      </Button>
    </Box>
  );
}

export default Header;

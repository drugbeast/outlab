import Logo from "../../assets/icons/logo.svg?react";
import { Box, Link, List, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { HEADER_NAVS, HEADER_BUTTON_TEXT } from "../../constants/constants.jsx";

function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }} pt="30px">
      <Logo />
      <List sx={{ display: "flex", gap: "50px", alignItems: "center" }}>
        {HEADER_NAVS.map((nav) => (
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
            key={nav.id}
          >
            {nav.text}
          </Link>
        ))}
      </List>
      <Button
        variant="contained"
        sx={{
          fontFamily: "Roboto Condensed Variable",
          padding: "20px 60px",
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

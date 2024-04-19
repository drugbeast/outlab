import Logo from "../assets/icons/logo.svg?react";
import { Box, Link, List, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { HEADER_NAVS } from "../constants/constants.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "./Core/CustomButton";

function Header() {
  return (
    <Box>
      <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          pt="32px"
        >
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
                  color="whiteColor.main"
                  underline="none"
                  component={RouterLink}
                  to="/"
                >
                  {nav.text}
                </Link>
                {nav.id < 3 && <MenuIcon sx={{ color: "whiteColor.main" }} />}
              </Box>
            ))}
          </List>
          <CustomButton variant="contained" />
        </Box>
      </Container>
    </Box>
  );
}

export default Header;

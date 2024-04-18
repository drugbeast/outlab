import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

function Layout() {
  return (
    <Box sx={{ backgroundColor: "bgColor.main" }}>
      <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </Box>
  );
}

export default Layout;

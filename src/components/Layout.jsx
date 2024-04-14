import { Outlet } from "react-router-dom";
import Header from "./Core/Header";
import Footer from "./Core/Footer";
import { Box } from "@mui/material";

function Layout() {
  return (
    <Box bgcolor="rgba(0, 0, 0, 1)">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default Layout;

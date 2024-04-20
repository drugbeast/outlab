import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <Box sx={{ backgroundColor: "bgColor.main" }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default Layout;

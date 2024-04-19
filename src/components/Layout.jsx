import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

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

import { Box } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export const LinesContext = createContext(null);

function Layout() {
  const [line, setLine] = useState("АНАРХИЯ");
  const value = useMemo(() => ({ line, setLine }), [line]);
  return (
    <Box sx={{ backgroundColor: "bgColor.main" }}>
      <LinesContext.Provider value={value}>
        <Header />
        <Outlet />
        <Footer />
      </LinesContext.Provider>
    </Box>
  );
}

export default Layout;

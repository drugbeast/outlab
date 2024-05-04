import { Box } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export const LinesContext = createContext(null);
export const DevicesContext = createContext(null);

function Layout() {
  const [line, setLine] = useState("PODONKI АНАРХИЯ");
  const [devicesSeries, setSeries] = useState("ЭС PODONKI 6000 ТЯГ");

  const linesContextValue = useMemo(() => ({ line, setLine }), [line]);
  const devicesSeriesValue = useMemo(
    () => ({ devicesSeries, setSeries }),
    [devicesSeries]
  );
  return (
    <Box sx={{ backgroundColor: "bgColor.main" }}>
      <LinesContext.Provider value={linesContextValue}>
        <DevicesContext.Provider value={devicesSeriesValue}>
          <Header />
          <Outlet />
          <Footer />
        </DevicesContext.Provider>
      </LinesContext.Provider>
    </Box>
  );
}

export default Layout;

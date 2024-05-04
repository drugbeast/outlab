import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Delivery from "./pages/Delivery";
import Devices from "./pages/Devices"
import Home from "./pages/Home";
import Lines from "./pages/Lines";


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/lines" element={<Lines />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

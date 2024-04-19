import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";
import Lines from "./pages/Lines";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/delivery" element={<Delivery />}></Route>

          <Route path="/lines" element={<Lines />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home"

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/delivery" element={<Delivery />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
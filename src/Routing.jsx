import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Delivery from "./pages/Delivery";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/delivery" element={<Delivery />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
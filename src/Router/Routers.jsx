import Home from "../pages/Home";
import CheckOut from "../pages/CheckOut";
import Login from "../pages/Login";
import Shopping from "../pages/Shopping";
import SignUp from "../pages/SignUp";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import { Routes, Route } from "react-router-dom";

function Routers() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/shopping/:id" element={<ProductDetail />} />
      <Route path="/checkForm" element={<Cart />} />
    </Routes>
  );
}

export default Routers;

import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Contact from "../pages/Contact";
import Create from "../pages/Create";
import EditProfile from "../pages/EditProfile";
import Home from "../pages/Home";
import Market from "../pages/Market";
import NftDetails from "../pages/NftDetails";
import SellerProfile from "../pages/SellerProfile";
import Wallet from "../pages/Wallet";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/seller-profile" element={<SellerProfile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/market/:id" element={<NftDetails />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  );
};

export default Routers;

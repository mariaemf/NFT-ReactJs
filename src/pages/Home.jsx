import React from "react";
/*import { Container } from 'reactstrap';*/
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/live-auction/LiveAuction";
import SellerSection from "../components/ui/Seller-section/SellerSection";
import StepSection from "../components/ui/Step-section/StepSection";
import Treding from "../components/ui/Treeding-section/Treding";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Treding />
      <StepSection />
    </>
  );
};

export default Home;

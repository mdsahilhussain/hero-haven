import React from "react";
import { About, CompanyPartner, HeroSection } from "../../components";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <CompanyPartner />
      <About />
    </React.Fragment>
  );
};

export default Home;

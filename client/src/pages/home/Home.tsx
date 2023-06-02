import React from "react";
import {
  Features,
  CompanyPartner,
  HeroSection,
  TopContributor,
} from "../../components";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <CompanyPartner />
      <TopContributor />
      <Features />
    </React.Fragment>
  );
};

export default Home;

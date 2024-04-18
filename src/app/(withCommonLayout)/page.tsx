import BannerSection from "@/components/UI/HomePage/BannerSection/BannerSection";
import HowItWorks from "@/components/UI/HomePage/HowItWorks/HowItWorks";
import Specialities from "@/components/UI/HomePage/Specialities/Specialities";
import StatCount from "@/components/UI/HomePage/StatCount/StatCount";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs";
import { Button } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <Specialities />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
      <StatCount />
    </>
  );
};

export default HomePage;

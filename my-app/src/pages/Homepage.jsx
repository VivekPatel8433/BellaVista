import React from "react";
import Header from "../components/Headers/headers";
import HeroSection from "../components/herosection";
import AboutSection from "../components/aboutsection";
import Dishes from "../components/dishes";
import GuestExperience from "../components/testimonials";
import Menu from "../components/menu";
import Footer from "../components/Headers/Footer/footer";

function Home() {
  return (
    <>
     <Header />
      <HeroSection />
      <AboutSection />
      <Dishes />
      <GuestExperience />
      <Menu />
      <Footer />
    </>
  );
}

export default Home;

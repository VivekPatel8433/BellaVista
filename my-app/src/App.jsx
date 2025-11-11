import React from "react"
import Header from "../src/components/Headers/headers"
import HeroSection from "./components/herosection"
import AboutSection from "./components/aboutsection"
import Dishes from "./components/dishes"
import GuestExperience from "./components/testimonials"
import Menu from "./components/menu"
import Footer from "./components/Footer/footer"
import { Analytics } from "@vercel/analytics/next"

function App() {

  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <Dishes></Dishes>
      <GuestExperience></GuestExperience>
      <Menu></Menu>
      <Footer></Footer>
    </>
  )
}

export default App

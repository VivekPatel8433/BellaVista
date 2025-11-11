import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Headers/headers";
import Home from "./pages/Homepage";
import AboutSection from "./components/aboutsection";
import Dishes from "./components/dishes";
import GuestExperience from "./components/testimonials";
import Menu from "./components/menu";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
    <Header />
         <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutSection />} />
        <Route path="dishes" element={<Dishes />} />
        <Route path="guest" element={<GuestExperience />} />
        <Route path="menu" element={<Menu />}></Route>
        <Route path="reserve" element={<Footer />} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;

import { useState } from "react";
import Carousel from "./Components/Carousel";
import CreditCard from "./Sections/CreditCard";
import Faq from "./Sections/Faq";
import Footer from "./Sections/Footer";
import Form from "./Sections/Form";
import Hero from "./Sections/Hero";
import Rewards from "./Sections/Rewards";
import Second from "./Sections/Second";
import SecondMobile from "./Sections/SecondMobile";

function App() {
  return (
    <div className="w-screen h-auto">
      <Hero />
      <Second />
      <Form />
      <Rewards />
      <CreditCard />
      {/* For Mobile Design */}
      <SecondMobile />
      {/* */}
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

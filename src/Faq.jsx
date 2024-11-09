import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import FaqAccordion from "./FaqAccordion.jsx"
import Faq from "./assets/faq.jpg"
import Footer from "./Footer.jsx";


function faqPage() {
  return (
    <>
    <NavbarFirst />
    <Slider title="FAQ" subtitle="consulente del lavoro" imgUrl={Faq} />
    <FaqAccordion />
    <Footer />
    </>
  )
}

export default faqPage;
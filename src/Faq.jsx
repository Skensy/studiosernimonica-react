import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Corpo from "./Corpo.jsx";
import FaqAccordion from "./FaqAccordion.jsx"
import Faq from "./assets/Faq.jpg"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Slider title="FAQ" subtitle="consulente del lavoro" imgUrl={Faq} />
    <FaqAccordion />
  </StrictMode>
);
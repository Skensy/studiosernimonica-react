import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Midcontent from "./Midcontent.jsx";
import Cards from "./CardLists.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <NavbarFirst />
      <Slider
        title="STUDIO SERNI MONICA"
        subtitle="consulente del lavoro"
        gradient=""
        imgUrl="./src/assets/slider-foto.avif"
      />
      <Midcontent />
      <Cards />
    </NextUIProvider>
  </StrictMode>
);

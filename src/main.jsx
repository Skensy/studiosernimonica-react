import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Midcontent from "./Midcontent.jsx";
import NewCard from "./Card.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Assistenza from "./assets/assistenza-fiscale-serni-monica.avif";
import Consulenza from "./assets/consulenza-contrattuale-e-del-lavoro.avif";
import Gestione from "./assets/gestione-delle-risorse-umane.avif";
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

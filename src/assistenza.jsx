import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Midcontent from "./Midcontent.jsx";
import Card from "./Card.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Assistenza from "./assets/assistenza-fiscale-serni-monica.avif";
import Consulenza from "./assets/consulenza-contrattuale-e-del-lavoro.avif";
import Gestione from "./assets/gestione-delle-risorse-umane.avif";
import Cards from "./CardLists.jsx";
import CorpoAssistenza from "./CorpoAssistenza.jsx";
import Scelta from "./Scelta.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavbarFirst />
    <Slider title="ASSISTENZA FISCALE IN AMBITO LAVORATIVO" subtitle="consulente del lavoro" imgUrl = {Assistenza}  />
    <CorpoAssistenza />
    <Scelta />
  </StrictMode>
);
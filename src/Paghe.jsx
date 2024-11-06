import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar.jsx";
import Slider from "./Slider.jsx";
import Midcontent from "./Midcontent.jsx";
import Card from "./Card.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Corpo from "./Corpo.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Slider title="GESTIONE PAGHE E CONTRIBUTI" subtitle="consulente del lavoro" imgUrl={Paghe} />
    <Corpo />
  </StrictMode>
);
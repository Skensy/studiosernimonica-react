import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar.jsx";
import Slider from "./Slider.jsx";
import Midcontent from "./Midcontent.jsx";
import Card from "./Card.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Slider />
    <Midcontent />
    <div className="mt-12 flex justify-around flex-wrap gap-4 mb-12">
      <Card Title="Gestione Paghe e Contributi" Description="" imgUrl={Paghe} />
      <Card Title="Consulenza Contrattuale e del Lavoro" Description="" imgUrl={Paghe} />
      <Card Title="Assistenza Fiscale in Ambito Lavorativo" Description="" imgUrl={Paghe} />
      <Card Title="Gestione delle Risorse Umane" Description="" imgUrl={Paghe} />
    </div>
  </StrictMode>
);

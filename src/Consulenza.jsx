import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import imgConsulenza from "./assets/consulenza-contrattuale-e-del-lavoro.avif";
import Scelta from "./Scelta.jsx";
import CorpoConsulenza from "./CorpoConsulenza.jsx";
import Footer from "./Footer.jsx";
import { Helmet } from "react-helmet";

function Consulenza() {
  return (
    <>
      <Helmet>
        <title>Assistenza Contrattuale - Consulente Serni Monica</title>
        <meta
          name="description"
          content="Studio Serni Monica: consulenza lavoro a Viterbo. Supporto esperto in contratti, rapporti di lavoro e questioni sindacali."
        />
        <meta
          property="Assistenza Contrattuale - Consulente Serni Monica"
          content="Studio Serni Monica: consulenza lavoro a Viterbo. Supporto esperto in contratti, rapporti di lavoro e questioni sindacali."
        />
      </Helmet>
      <NavbarFirst />
      <Slider
        title="CONSULENZA CONTRATTUALE E DEL LAVORO"
        subtitle="consulente del lavoro"
        imgUrl={imgConsulenza}
      />
      <CorpoConsulenza />
      <Scelta />
      <Footer />
    </>
  );
}

export default Consulenza;

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Midcontent from "./Midcontent.jsx";
import Cards from "./CardLists.jsx";
import Mappa from "./Mappa.jsx";
import Consulenza from "./Consulenza.jsx";
import Gestione from "./Gestione.jsx";
import Paghe from "./Paghe.jsx";
import Assistenza from "./Assistenza.jsx";
import Contatti from "./Contatti.jsx";
import Faq from "./Faq.jsx";
import Servizi from "./Servizi.jsx";
import sliderMain from "./assets/slider-foto.avif";
import Scelta from "./Scelta.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarFirst />
                <Slider
                  title="STUDIO SERNI MONICA"
                  subtitle="consulente del lavoro"
                  gradient=""
                  imgUrl={sliderMain}
                />
                <Midcontent />
                <Cards />
                <Scelta
                bgDiv=""
                firstDiv="flex-row text-center"
                secondDiv="flex flex-row justify-center gap-8 flex-wrap"
                thirdDiv="flex flex-col items-center text-sm w-64 mb-0"
                svgDiv=""
                hpDiv="pr-6 pt-4 gap-2 text-sm w-full"
                />
                <Mappa />
                <Footer />
              </>
            }
          />
          <Route
            path="/consulenza-contrattuale-e-del-lavoro"
            element={<Consulenza />}
          />
          <Route path="/gestione-delle-risorse-umane" element={<Gestione />} />
          <Route path="/gestione-paghe-e-contributi-2" element={<Paghe />} />
          <Route
            path="/assistenza-fiscale-in-ambito-lavorativo-1"
            element={<Assistenza />}
          />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/servizi" element={<Servizi />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  </StrictMode>
);

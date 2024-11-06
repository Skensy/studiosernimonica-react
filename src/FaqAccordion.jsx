import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Midcontent from "./Midcontent.jsx";
import Card from "./Card.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Assistenza from "./assets/assistenza-fiscale-serni-monica.avif";
import Consulenza from "./assets/consulenza-contrattuale-e-del-lavoro.avif";
import Gestione from "./assets/gestione-delle-risorse-umane.avif";
import Cards from "./CardLists.jsx";
import {Accordion, AccordionItem} from "@nextui-org/react";


function Corpo() {
  const firstContent =
  "Studio Serni Monica si specializza nella consulenza del lavoro, offrendo servizi di elaborazione delle buste paga, calcolo dei contributi previdenziali, assistenza nelle relazioni con gli enti previdenziali e supporto in caso di ispezioni.";
  const secondContent =
  "Certamente. Forniamo soluzioni personalizzate per rispondere efficacemente alle specifiche esigenze di ogni azienda, garantendo un servizio che si adatta perfettamente alle vostre necessità.";

  return (
    <>
      <div className="sm:px-8 md:px-24 lg:px-24 xl:px-48 2xl:px-56 py-28 text-left bg-white">
      <Accordion className="p-6">
      <AccordionItem key="1" aria-label="" title="Che tipo di servizi offre Studio Serni Monica?">
        <div className="p-4">
            {firstContent}
        </div>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="È POSSIBILE PERSONALIZZARE I SERVIZI OFFERTI IN BASE ALLE ESIGENZE DELLA MIA AZIENDA?">
      <div className="p-4">
            {secondContent}
        </div>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {firstContent}
      </AccordionItem>
    </Accordion>
      </div>
    </>
  );
}

export default Corpo;

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


function FaqAccordion() {
  const firstContent =
  "Studio Serni Monica si specializza nella consulenza del lavoro, offrendo servizi di elaborazione delle buste paga, calcolo dei contributi previdenziali, assistenza nelle relazioni con gli enti previdenziali e supporto in caso di ispezioni.";
  const secondContent =
  "Certamente. Forniamo soluzioni personalizzate per rispondere efficacemente alle specifiche esigenze di ogni azienda, garantendo un servizio che si adatta perfettamente alle vostre necessità.";
  const thirdContent = "Studio Serni Monica si impegna in un aggiornamento professionale continuo per garantire che il nostro team sia sempre al passo con le ultime normative e possa fornire consulenza aggiornata ed efficace."
  const fourthContent = "Studio Serni Monica garantisce la conformità legale attraverso un’accurata gestione delle buste paga, calcolo dei contributi previdenziali e assistenza continua, riducendo il rischio di errori e sanzioni."

  return (
    <>
      <div className="sm:px-8 md:px-24 lg:px-24 xl:px-48 2xl:px-64 px-8 pt-28 text-left bg-white text-black">
        <h2 className="text-xl font-semibold">
        FAQ - Domande frequenti
        </h2>
        <p>In questa sezione troverai le risposte alle domande più comuni sui nostri servizi di consulenza del lavoro. Se hai bisogno di ulteriori informazioni, non esitare a contattarci.</p>


      </div>
      <div className="sm:px-8 md:px-24 lg:px-24 xl:px-48 2xl:px-56 py-28 text-left w-full bg-white">
      <Accordion className="p-6">
      <AccordionItem key="1" aria-label="Accordion 1" title="Che tipo di servizi offre Studio Serni Monica?" className="!bg-white">
        <div className="p-4 text-black" >
            {firstContent}
        </div>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="È possibile personalizzare i servizi offerti in base alle esigenze della mia azienda?" className="bg-white">
      <div className="p-4 text-black">
            {secondContent}
        </div>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Qual è l'approccio di Serni Monica all'aggiornamento professionale" className="bg-white">
      <div className="p-4 text-black">
            {thirdContent}
        </div>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Come posso essere sicuro che la mia azienda sia in conformità con le normative vigenti?" className="bg-white">
      <div className="p-4 text-black">
            {fourthContent}
        </div>
      </AccordionItem>
    </Accordion>
      </div>
    </>
  );
}

export default FaqAccordion;

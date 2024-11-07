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
import Scelta from "./Scelta.jsx";

function CorpoGestione() {
  const riga = "h-1 bg-black my-10 w-44";

  return (
    <>
      <div className="sm:px-8 md:px-24 lg:px-24 xl:px-48 2xl:px-56 px-6 py-28 text-left">
        <h2 className="text-xl mb-6">
          Lo Studio Serni Monica, leader a Viterbo nella consulenza del lavoro,
          offre servizi specializzati nella gestione delle risorse umane, mirati
          a supportare le aziende nella costruzione di un team efficace e
          nell’ottimizzazione delle dinamiche lavorative.
        </h2>
        <div className={riga}></div>
        <h2 class="uppercase text-4xl mb-12">
          <strong> Servizi Offerti</strong>
        </h2>
        <ul className="list-disc px-6 py-6">
          <li className="font-bold uppercase">
            Supporto nella Selezione del Personale
          </li>
          <p className="mb-4">
            Anche se la formazione e la valutazione delle prestazioni non
            rientrano nei nostri servizi diretti, comprendiamo l’importanza di
            un processo di selezione attento e mirato. Offriamo quindi supporto
            strategico nella selezione del personale, aiutando le aziende a
            identificare i candidati più idonei che possano contribuire al
            successo e alla crescita dell’organizzazione.
          </p>
          <li className="font-bold uppercase">
            Consulenza Legale e Contrattuale
          </li>
          <p className="mb-4">
            Specializzati in consulenza del lavoro, forniamo assistenza legale e
            contrattuale per garantire che tutti gli aspetti delle relazioni di
            lavoro siano gestiti in conformità con le normative vigenti,
            riducendo i rischi legali e migliorando le relazioni lavorative.
          </p>
          <li className="font-bold uppercase">
            Piani di Sviluppo delle Carriere
          </li>
          <p className="mb-4">
            Supportiamo le aziende nella definizione di percorsi di crescita
            professionale per i loro dipendenti, promuovendo la motivazione e
            l’engagement attraverso opportunità di sviluppo mirate.
          </p>
        </ul>
      </div>
    </>
  );
}

export default CorpoGestione;

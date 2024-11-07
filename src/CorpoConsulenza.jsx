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

function CorpoConsulenza() {
  const riga = "h-1 bg-black my-10 w-44";

  return (
    <>
      <div className="sm:px-8 md:px-24 lg:px-24 xl:px-48 2xl:px-56 px-6 py-28 text-left">
        <h2 className="text-xl mb-6">
          Lo Studio Serni Monica, con sede a Viterbo, è il vostro partner di
          fiducia per servizi di consulenza nel campo del lavoro, specializzato
          nella gestione dei rapporti di lavoro e nella scelta dei contratti più
          adeguati alle vostre esigenze. La nostra esperienza ci consente di
          fornire consulenza su misura per le aziende e i lavoratori di Viterbo,
          Provincia e tutto il territorio nazionale.
        </h2>
        <div className={riga}></div>
        <h2 className="uppercase text-4xl mb-12">
          <strong>Servizi Offerti</strong>
        </h2>
        <p>
          Ci occupiamo di ogni dettaglio dell'elaborazione delle buste paga:
        </p>
        <ul className="list-disc px-6 py-6">
          <li className="font-bold uppercase">
            Selezione del Contratto Ideale
          </li>
          <p className="mb-4">
            Offriamo consulenza per identificare il contratto di lavoro
            accompagnando il datore di lavoro in tutto il rapporto di lavoro,
            dall’assunzione alla risoluzione, offrendo anche assistenza in caso
            di contenzioso.
          </p>
          <li className="font-bold uppercase">Supporto Specializzato</li>
          <p className="mb-4">
            Affrontiamo le sfide relative al lavoro con un supporto mirato con
            l’obiettivo di tutelare i vostri interessi.
          </p>
          <li className="font-bold uppercase">
            Consulenza su Questioni Lavorative e Sindacali
          </li>
          <p className="mb-4">
            La nostra profonda conoscenza del mercato del lavoro nazionale ci
            permette di fornire assistenza qualificata su questioni lavorative,
            relazioni sindacali attraverso trattative per CIG, ordinaria e
            straordinaria e risoluzione di controversie con la predisposizione
            di accordi e conciliazioni sindacali.
          </p>
        </ul>
        <p>
          Garantiamo che i tuoi dipendenti ricevano remunerazioni precise e
          puntuali.
        </p>
      </div>
    </>
  );
}

export default CorpoConsulenza;

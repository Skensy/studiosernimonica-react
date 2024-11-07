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

function CorpoAssistenza() {
  const riga = "h-1 bg-black my-10 w-44";

  return (
    <>
      <div className="sm:px-8 md:px-24 lg:px-24 xl:px-48 2xl:px-56 px-6 py-28 text-left">
        <h2 className="text-xl mb-6">
          La nostra missione è di offrire assistenza completa e personalizzata
          per ogni esigenza fiscale legata al lavoro dipendente e autonomo,
          garantendo serenità e sicurezza ai nostri clienti.
        </h2>
        <div className={riga}></div>
        <h2 class="uppercase text-4xl mb-12">
          <strong>Assistenza Fiscale per Lavoratori Dipendenti</strong>
        </h2>
        <p>
          Nel complesso panorama fiscale italiano, i lavoratori dipendenti si
          trovano spesso a dover navigare tra avvisi bonari, cartelle di
          pagamento e questioni burocratiche complesse.
          <br />
          Lo Studio Serni Monica è specializzato nell’assistenza fiscale
          dedicata, offrendo un servizio completo che copre:
        </p>
        <ul className="list-disc px-6 py-6">
          <li className="font-bold uppercase">Gestione di Avvisi Bonari</li>
          <p className="mb-4">
            Supporto nella comprensione e nella gestione degli avvisi bonari
            emessi dall’Agenzia delle Entrate, fornendo consulenza per eventuali
            contestazioni o per la regolarizzazione della posizione fiscale.
          </p>
          <li className="font-bold uppercase">
            Gestione di Cartelle di Pagamento
          </li>
          <p className="mb-4">
            Consulenza e assistenza per la gestione e la risoluzione delle
            cartelle di pagamento, valutando le opzioni disponibili come
            dilazioni di pagamento, contestazioni o definizioni agevolate.
          </p>
          
        </ul>
      </div>
    </>
  );
}

export default CorpoAssistenza;

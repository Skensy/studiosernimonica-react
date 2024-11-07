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
import Scelta from "./Scelta.jsx"

function CorpoPaghe() {
  const riga = "h-1 bg-black my-10 w-44";

  return (
    <>
      <div className="sm:px-8 md:px-24 lg:px-24 xl:px-48 2xl:px-56 px-6 py-28 text-left">
        <h2 className="text-xl mb-6">
          Studio Serni Monica è il tuo partner di fiducia per la gestione
          completa delle buste paga e dei contributi previdenziali. Offriamo un
          servizio accurato e personalizzato per ogni tipo di azienda e
          contratto collettivo nazionale del lavoro (CCNL).
        </h2>
        <div className={riga}></div>
        <h2 class="uppercase text-4xl mb-12">
          <strong>ELABORAZIONE BUSTE PAGA PRECISA E PUNTUALE</strong>
        </h2>
        <p>
          Ci occupiamo di ogni dettaglio dell'elaborazione delle buste paga:
        </p>
        <ul className="list-disc px-6 py-6">
          <li>Imputazione ore lavorate</li>
          <li>Detrazioni fiscali</li>
          <li>Straordinari e ferie</li>
          <li>Conformit&agrave; alle normative vigenti</li>
        </ul>
        <p>
          Garantiamo che i tuoi dipendenti ricevano remunerazioni precise e
          puntuali.
        </p>
        <h2 class="uppercase text-4xl mb-12 mt-12">
          <strong>
            Supporto Completo per le Relazioni con gli Enti Previdenziali
          </strong>
        </h2>
        <p>Ti assistiamo nella gestione delle pratiche con:</p>
        <ul className="list-disc px-6 py-6">
          <li>INPS</li>
          <li>INAIL</li>
          <li>Altri enti previdenziali</li>
        </ul>
        <p>
          Ti offriamo supporto in caso di ispezioni e richieste di informazioni,
          garantendo la conformit&agrave; di tutte le tue pratiche.
        </p>
        <div className={riga}></div>
      </div>
    </>
  );
}

export default CorpoPaghe;

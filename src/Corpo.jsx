import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar.jsx";
import Slider from "./Slider.jsx";
import Midcontent from "./Midcontent.jsx";
import Card from "./Card.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Assistenza from "./assets/assistenza-fiscale-serni-monica.avif";
import Consulenza from "./assets/consulenza-contrattuale-e-del-lavoro.avif";
import Gestione from "./assets/gestione-delle-risorse-umane.avif";
import Cards from "./CardLists.jsx";

function Corpo() {

    const riga = "h-1 bg-black my-10 w-44";

  return (
    <>
      <div className="sm:px-8 md:px-24 lg:px-24 xl:px-48 2xl:px-56 px-6 py-28 text-left bg-white">
        <h2 className="text-xl mb-6">
          Studio Serni Monica è il tuo partner di fiducia per la gestione
          completa delle buste paga e dei contributi previdenziali. Offriamo un
          servizio accurato e personalizzato per ogni tipo di azienda e
          contratto collettivo nazionale del lavoro (CCNL).
        </h2>
        <div className={riga}></div>
        <h2 class="uppercase text-3xl mb-12">
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
        <h2 class="uppercase text-3xl mb-12 mt-12">
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
        <h2 class="uppercase text-3xl font-bold mb-12 mt-12">
          Perch&eacute; Scegliere Studio Serni Monica?
        </h2>
        <div>
          <div className="mb-6 text-xl">
            <h3>
              <strong>Professionalit&agrave; ed Esperienza</strong>
            </h3>
            <p>
              Il nostro team altamente qualificato vanta anni di esperienza nel
              settore della consulenza del lavoro.
            </p>
          </div>
          <div className="mb-6 text-xl">
            <h3>
              <strong>Personalizzazione del Servizio</strong>
            </h3>
            <p>Adattiamo le nostre soluzioni alle tue esigenze specifiche.</p>
          </div>
          <div className="mb-6 text-xl">
            <h3>
              <strong>Aggiornamento Continuo</strong>
            </h3>
            <p>
              Ci impegniamo costantemente nell'aggiornamento professionale per
              garantirti l'adeguamento alle ultime normative.
            </p>
          </div>
          <div className="mb-6 text-xl">
            <h3>
              <strong>Tecnologia Avanzata</strong>
            </h3>
            <p>
              Utilizziamo software all'avanguardia per l'elaborazione delle
              buste paga e la gestione dei contributi, assicurando efficienza e
              affidabilit&agrave;.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Corpo;

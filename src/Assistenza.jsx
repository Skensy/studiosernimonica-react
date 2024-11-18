import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Assistenza from "./assets/assistenza-fiscale-serni-monica.avif";
import CorpoAssistenza from "./CorpoAssistenza.jsx";
import Scelta from "./Scelta.jsx";
import Footer from "./Footer.jsx";
import { Helmet } from "react-helmet";

function assistenzaPage() {
  return (
    <>
      <Helmet>
        <title>Assistenza Fiscale  - Consulente del Lavoro Serni</title>
        <meta
          name="description"
          content="Affidati a Studio Serni Monica per assistenza fiscale nel lavoro dipendente: gestione avvisi bonari, controversie e cartelle di pagamento."
        />
        <meta
          property="Assistenza Fiscale  - Consulente del Lavoro Serni"
          content="Affidati a Studio Serni Monica per assistenza fiscale nel lavoro dipendente: gestione avvisi bonari, controversie e cartelle di pagamento."
        />
      </Helmet>
      <NavbarFirst />
      <Slider
        title="ASSISTENZA FISCALE IN AMBITO LAVORATIVO"
        subtitle="consulente del lavoro"
        imgUrl={Assistenza}
      />
      <CorpoAssistenza />
      <Scelta />
      <Footer />
    </>
  );
}

export default assistenzaPage;

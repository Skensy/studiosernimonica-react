import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Contatti from "./assets/contatti.jpg";
import Footer from "./Footer.jsx";
import ContattiContent from "./ContattiContent.jsx";
import Mappa from "./Mappa.jsx";
import { Helmet } from "react-helmet";

function contattiPage() {
  return (
    <>
      <Helmet>
        <title>Contatti - Consulente del Lavoro Serni Monica</title>
        <meta
          name="description"
          content="Per assistenza personalizzata in consulenza del lavoro, visita la pagina contatti di Studio Serni Monica a Viterbo."
        />
        <meta
          property="Contatti - Consulente del Lavoro Serni Monica"
          content="Per assistenza personalizzata in consulenza del lavoro, visita la pagina contatti di Studio Serni Monica a Viterbo."
        />
      </Helmet>
      <NavbarFirst />
      <Slider
        title="CONTATTI"
        subtitle="consulente del lavoro"
        imgUrl={Contatti}
      />
      <ContattiContent />
      <Mappa />
      <Footer />
    </>
  );
}

export default contattiPage;

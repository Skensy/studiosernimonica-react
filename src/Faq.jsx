import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import FaqAccordion from "./FaqAccordion.jsx";
import Faq from "./assets/faq.jpg";
import Footer from "./Footer.jsx";
import "./index.css";
import { Helmet } from "react-helmet";

function faqPage() {
  return (
    <>
      <Helmet>
        <title>FAQ - Consulente del lavoro Serni Monica</title>
        <meta
          name="description"
          content="Trova risposte alle tue domande sulla consulenza del lavoro con le FAQ di Studio Serni Monica a Viterbo: servizi, conformità e supporto."
        />
        <meta
          property="FAQ - Consulente del lavoro Serni Monica"
          content="Trova risposte alle tue domande sulla consulenza del lavoro con le FAQ di Studio Serni Monica a Viterbo: servizi, conformità e supporto."
        />
      </Helmet>
      <main className="light">
        <NavbarFirst />
        <Slider title="FAQ" subtitle="consulente del lavoro" imgUrl={Faq} />
        <FaqAccordion />
        <Footer />
      </main>
    </>
  );
}

export default faqPage;

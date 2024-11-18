import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Scelta from "./Scelta.jsx";
import CorpoPaghe from "./CorpoPaghe.jsx";
import Footer from "./Footer.jsx";
import React, { useState, useEffect } from "react";
import * as contentful from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Helmet } from "react-helmet";

function paghePage() {
  return (
    <>
      <Helmet>
        <title>Gestione Paghe e Contributi - Serni Monica</title>
        <meta name="description" content="Studio Serni Monica offre gestione professionale di paghe e contributi, assicurando conformità legale con servizi e tecnologia avanzata." />
        <meta
          property="Gestione Paghe e Contributi - Serni Monica"
          content="Studio Serni Monica offre gestione professionale di paghe e contributi, assicurando conformità legale con servizi e tecnologia avanzata."
        />
      </Helmet>
      <NavbarFirst />
      <Slider
        title="GESTIONE PAGHE E CONTRIBUTI"
        subtitle="consulente del lavoro"
        imgUrl={Paghe}
      />
      <CorpoPaghe />
      <Scelta />
      <Footer />
    </>
  );
}

export default paghePage;

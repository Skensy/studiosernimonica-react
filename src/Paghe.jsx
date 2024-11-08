import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Scelta from "./Scelta.jsx";
import CorpoPaghe from "./CorpoPaghe.jsx";


function paghePage() {
  return (
    <>
    <NavbarFirst />
    <Slider title="GESTIONE PAGHE E CONTRIBUTI" subtitle="consulente del lavoro" imgUrl={Paghe} />
    <CorpoPaghe />
    <Scelta />
    </>
  )
}


export default paghePage;
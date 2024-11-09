import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import imgConsulenza from "./assets/consulenza-contrattuale-e-del-lavoro.avif"
import Scelta from "./Scelta.jsx";
import CorpoConsulenza from "./CorpoConsulenza.jsx";


function Consulenza() {
  return (
    <>
    <NavbarFirst />
    <Slider title="CONSULENZA CONTRATTUALE E DEL LAVORO" subtitle="consulente del lavoro" imgUrl={imgConsulenza} />
    <CorpoConsulenza />
    <Scelta />
    </>
  )
}


export default Consulenza;

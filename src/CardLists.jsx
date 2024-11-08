import "./index.css";
import Card from "./Card.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Assistenza from "./assets/assistenza-fiscale-serni-monica.avif";
import Consulenza from "./assets/consulenza-contrattuale-e-del-lavoro.avif";
import Gestione from "./assets/gestione-delle-risorse-umane.avif";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Cards() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <>
      <div className="bg-gray-500/20 flex flex-col py-8 ">
        <div className="flex justify-center">
          <h2 className="font-semibold text-4xl text-gray-700">
            SCOPRI I MIEI SERVIZI
          </h2>
        </div>
        <div className="mt-16 flex flex-wrap gap-6 mb-12 justify-center">
          <div>
            <Link to="/gestione-paghe-e-contributi-2" onClick={scrollToTop}>
              <Card
                Title="Gestione Paghe e Contributi"
                Description=""
                imgUrl={Paghe}
                Gradient=""
                cardImgUrl={Paghe}
              />
            </Link>
          </div>
          <div>
            <Link
              to="/consulenza-contrattuale-e-del-lavoro"
              onClick={scrollToTop}
            >
              <Card
                Title="Consulenza Contrattuale e del Lavoro"
                Description=""
                imgUrl={Consulenza}
                Gradient="bg-gradient-to-r from-blue-800 to-indigo-900"
                cardImgUrl={Consulenza}
              />
            </Link>
          </div>
          <div>
            <Link
              to="/assistenza-fiscale-in-ambito-lavorativo-1"
              onClick={scrollToTop}
            >
              <Card
                Title="Assistenza Fiscale in Ambito Lavorativo"
                Description=""
                imgUrl={Assistenza}
                Gradient="bg-gradient-to-r from-slate-900 to-slate-700"
                cardImgUrl={Assistenza}
              />
            </Link>
          </div>
          <div>
            <Link to="/gestione-delle-risorse-umane" onClick={scrollToTop}>
              <Card
                Title="Gestione delle Risorse mane"
                Description=""
                imgUrl={Gestione}
                Gradient="bg-gradient-to-r from-violet-500 to-purple-500"
                cardImgUrl={Gestione}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

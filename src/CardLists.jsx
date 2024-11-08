import "./index.css";
import Card from "./Card.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Assistenza from "./assets/assistenza-fiscale-serni-monica.avif";
import Consulenza from "./assets/consulenza-contrattuale-e-del-lavoro.avif";
import Gestione from "./assets/gestione-delle-risorse-umane.avif";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="font-semibold text-4xl text-gray-700">
          SCOPRI I MIEI SERVIZI
        </h2>
      </div>
      <div className="mt-16 flex flex-wrap gap-6 mb-12 justify-center">
        <Link to="/gestione-paghe-e-contributi-2">
          <Card
            Title="Gestione Paghe e Contributi"
            Description=""
            imgUrl={Paghe}
            Gradient=""
            cardImgUrl={Paghe}
          />
        </Link>
        <Link to="/consulenza-contrattuale-e-del-lavoro">
          <Card
            Title="Consulenza Contrattuale e del Lavoro"
            Description=""
            imgUrl={Consulenza}
            Gradient="bg-gradient-to-r from-blue-800 to-indigo-900"
            cardImgUrl={Consulenza}
          />
        </Link>
        <Link to="/assistenza-fiscale-in-ambito-lavorativo-1">
          <Card
            Title="Assistenza Fiscale in Ambito Lavorativo"
            Description=""
            imgUrl={Assistenza}
            Gradient="bg-gradient-to-r from-slate-900 to-slate-700"
            cardImgUrl={Assistenza}
          />
        </Link>
        <Link to="/gestione-delle-risorse-umane">
          <Card
            Title="Gestione delle Risorse mane"
            Description=""
            imgUrl={Gestione}
            Gradient="bg-gradient-to-r from-violet-500 to-purple-500"
            cardImgUrl={Gestione}
          />
        </Link>
      </div>
    </>
  );
}

export default Cards;

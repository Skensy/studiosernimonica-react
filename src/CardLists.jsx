import "./index.css";
import Card from "./Card.jsx";
import Paghe from "./assets/paghe-e-contributi.jpg";
import Assistenza from "./assets/assistenza-fiscale-serni-monica.avif";
import Consulenza from "./assets/consulenza-contrattuale-e-del-lavoro.avif";
import Gestione from "./assets/gestione-delle-risorse-umane.avif";

function Cards() {
  return (
    <>
      <div>
        <h2 className="font-semibold text-4xl">SCOPRI I MIEI SERVIZI</h2>
      </div>
      <div className="mt-16 flex justify-around flex-wrap gap-4 mb-12">
        <Card
          Title="Gestione Paghe e Contributi"
          Description=""
          imgUrl={Paghe}
          Gradient="bg-gradient-to-r from-sky-600 to-teal-700"
          Url="/gestione-paghe-e-contributi-2.html"
        />
        <Card
          Title="Consulenza Contrattuale e del Lavoro"
          Description=""
          imgUrl={Consulenza}
          Gradient="bg-gradient-to-r from-blue-800 to-indigo-900"
          Url="/consulenza-contrattuale-e-del-lavoro.html"
        />
        <Card
          Title="Assistenza Fiscale in Ambito Lavorativo"
          Description=""
          imgUrl={Assistenza}
          Gradient="bg-gradient-to-r from-slate-900 to-slate-700"
          Url="/assistenza-fiscale-in-ambito-lavorativo-1.html"
        />
        <Card
          Title="Gestione delle Risorse mane"
          Description=""
          imgUrl={Gestione}
          Gradient="bg-gradient-to-r from-violet-500 to-purple-500"
          Url="/gestione-delle-risorse-umane.html"
        />
      </div>
    </>
  );
}

export default Cards;

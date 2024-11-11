import { motion } from "framer-motion";
import "./index.css"

function ServiziContent() {
  return (
    <div className="my-36 px-24 sm:px-12 md:px-36 lg:px-48 xl:px-96 py-12">
      <motion.p className="font-light text-2xl text-center">
        Lo Studio Serni Monica offre una vasta gamma di servizi di consulenza
        del lavoro, pensati per rispondere alle esigenze specifiche di aziende
        di ogni dimensione e settore. La nostra esperienza e competenza ci
        permettono di fornire soluzioni personalizzate e un supporto completo in
        ogni aspetto della gestione del personale.
      </motion.p>
    </div>
  );
}

export default ServiziContent;

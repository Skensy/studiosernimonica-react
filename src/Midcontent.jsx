import { motion } from "framer-motion"
import "./index.css"

function Midcontent() {


  return (
    <div className="my-36 px-12 py-12 xl:px-56 lg:px-52 md:px-12 sm:px-12">
      <motion.p
      className="font-light text-normal sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-center text-black">
        Con oltre 40 anni di esperienza nell’amministrazione del personale, lo <a className="underline decoration-sky-500">Studio di Consulenza del Lavoro Serni Monica</a> si dedica quotidianamente
        all’aggiornamento e allo studio del settore per rimanere al passo con le
        sue evoluzioni. L’obiettivo è quello di <a className="underline decoration-sky-800">supportare il cliente in ogni
        fase</a>, offrendo le migliori soluzioni per le sue esigenze.<br/> Questa
        missione è il cuore dell’attività dello Studio Serni Monica.
      </motion.p>
    </div>
  );
}

export default Midcontent;

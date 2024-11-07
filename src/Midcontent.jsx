import { motion } from "framer-motion"

function Midcontent() {
  return (
    <div className="my-36 px-24 sm:px-12 md:px-36 lg:px-48 xl:px-96 py-12">
      <motion.p
      className="font-light text-2xl text-center">
        Con oltre 40 anni di esperienza nell’amministrazione del personale, lo
        <a className="underline decoration-sky-500"> Studio di Consulenza del Lavoro Serni Monica</a> si dedica quotidianamente
        all’aggiornamento e allo studio del settore per rimanere al passo con le
        sue evoluzioni. L’obiettivo è quello di <a className="underline decoration-sky-800">supportare il cliente in ogni
        fase</a>, offrendo le migliori soluzioni per le sue esigenze.<br/> Questa
        missione è il cuore dell’attività dello Studio Serni Monica.
      </motion.p>
    </div>
  );
}

export default Midcontent;

import { Link } from "react-router-dom";
import imgCard from "./assets/paghe-e-contributi.jpg";
import { motion } from "framer-motion";

function Card(props) {
  const cardImgUrl = props.cardImgUrl;

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.0 }}
        transition={{ type: "Tween", stiffness: 400, damping: 10 }}
        className="hover:shadow-2xl"
      >
        <div
          className={`flex flex-col justify-center ${props.Gradient} w-64 h-96 rounded-xl bg-cover bg-center z-0 relative `}
          style={{ backgroundImage: `url('${cardImgUrl}')` }}
        >
          <div className="flex flex-col w-full h-full bg-black/50 absolute z-10 rounded-xl" />
          <h2 className="px-2 text-2xl text-white font-normal hover:font-normal text-center z-20">
            {props.Title}
          </h2>
          <p className="p-2 text-gray-200 z-20">{props.Description}</p>
        </div>
      </motion.div>
    </>
  );
}

export default Card;

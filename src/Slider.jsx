import { motion } from "framer-motion";
import "./index.css"
import { useState } from "react";
import { useLocation } from "react-router-dom";


function Slider(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const gradient = props.gradient;
  const imgUrl = props.imgUrl;


  const [uppercase, setUppercase] = useState("lowercase");

  const handleMouseOver = () => {
    setUppercase("uppercase")

  }

  const handleMouseOut = () => {
    setUppercase("lowercase")
  }


  return (
    <>
      <div className="flex flex-col w-full relative shadow-xl">
        <div className="flex flex-col justify-center items-center">
          <div
            style={{ backgroundImage: `url('${imgUrl}')`} }
            className={`z-0 h-screen flex w-full items-center ${gradient} justify-center bg-cover bg-center bg-fixed)`}
          />
          <div className="h-screen flex w-full z-10 bg-black/70 absolute" />
          <div className="flex flex-col z-20 absolute">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="text-2xl text-white font-bold text-center ">
                {title}
              </div>
              <div
              onMouseOver={handleMouseOver} 
              onMouseOut={handleMouseOut}
              className={`${uppercase} text-2xl text-center`}>Consulente del Lavoro</div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;

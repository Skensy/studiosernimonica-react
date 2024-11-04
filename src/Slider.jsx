import sliderFoto from "./assets/slider-foto.avif";

function Slider() {
  const img = sliderFoto;

  return (
    <>
    <div className="">
      <div className="w-full h-96 w-auto flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 justify-center mt-4">
        <div>
          <div className="text-4xl text-white">SERNI MONICA</div>
          <div className="text-white">consulente del lavoro</div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Slider;

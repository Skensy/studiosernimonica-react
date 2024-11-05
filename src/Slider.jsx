import sliderFoto from "./assets/slider-foto.avif";


function Slider(props) {

  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <>
    <div className="w-full relative z-0">
      <div className="h-dvh flex items-center bg-gradient-to-r from-violet-600 to-indigo-600 justify-center">
        <div>
          <div className="text-6xl text-white font-bold ">{title}</div>
          <div className="text-white text-2xl text-center">{subtitle}</div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Slider;

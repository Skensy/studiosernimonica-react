import sliderFoto from "./assets/slider-foto.avif";


function Slider(props) {

  const title = props.title;
  const subtitle = props.subtitle;
  const gradient = props.gradient;
  const imgUrl = props.imgUrl;

  return (
    <>
    <div className="flex flex-col w-full relative">
      <div className="flex flex-col justify-center items-center">
        <div className={`h-dvh flex w-full items-center ${gradient} justify-center z-0 bg-cover bg-top)`} style={{ backgroundImage: `url('${imgUrl}')` }} />
        <div className="h-dvh flex w-full z-10 bg-black/60 absolute" />
        <div className="flex flex-col z-20 absolute">
          <div className="text-6xl text-white font-bold ">{title}</div>
          <div className="text-white text-2xl text-center">{subtitle}</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Slider;

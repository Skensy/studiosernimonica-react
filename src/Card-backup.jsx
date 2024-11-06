import imgCard from "./assets/paghe-e-contributi.jpg";


function Card(props) {
  const Title = props.title;
  const Description = props.description;
  const imgUrl = props.img;
  const Gradient = props.Gradient;
  const cardImgUrl = props.cardImgUrl;

  return (
    <>
      <div className="hover:shadow-2xl">
        <a href={props.Url} className="hover:shadow-2xl">
          <div
            className={`flex flex-col justify-center ${props.Gradient} w-64 h-96 rounded-lg bg-cover bg-center z-0 relative`}
            style={{ backgroundImage: `url('${cardImgUrl}')` }}
          >
            <div className="flex flex-col w-full h-full bg-black/50 absolute z-10" />
            <h2 className="px-2 text-2xl text-white font-normal hover:font-normal text-center z-20">
              {props.Title}
            </h2>
            <p className="p-2 text-gray-200 z-20">{props.Description}</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;

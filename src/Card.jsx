import imgCard from "./assets/paghe-e-contributi.jpg";

function Card(props) {
  const Title = props.title;
  const Description = props.description;
  const imgUrl = props.img;
  const Gradient = props.Gradient;
  const Url = props.Url;

  return (
    <>
      <div className="hover:shadow-2xl">
        <a href={props.Url} className="hover:shadow-2xl">
          <div className={`flex flex-col justify-center ${props.Gradient} w-96 h-96 rounded-lg p-6`}>
              <h2 className="text-3xl text-white font-thin hover:font-normal text-center">{props.Title}</h2>
              <p className="p-2 text-gray-200">{props.Description}</p>
            </div>
        </a>
      </div>
    </>
  );
}

export default Card;

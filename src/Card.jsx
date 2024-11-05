import imgCard from "./assets/paghe-e-contributi.jpg";

function Card(props) {

  const Title = props.title
  const Description = props.description
  const imgUrl = props.img

  return (
    <>
        <a href="">
          <div className="bg-gray-800 w-80 rounded-lg">
            <img className="w-max rounded-t-lg" src={props.imgUrl} alt="" />
            <div className="p-6">
              <h2 className="text-2xl text-white">{props.Title}</h2>
              <p className="p-2 text-gray-200">{props.Description}</p>
            </div>
          </div>
        </a>
    </>
  );
}

export default Card;

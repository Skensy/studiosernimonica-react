import imgCard from "./assets/paghe-e-contributi.jpg";

function Card() {
  return (
    <>
      <div className="mt-12 flex justify-around flex-wrap gap-4 mb-12">
        <a href="">
          <div className="bg-gray-800 w-80 rounded-lg">
            <img className="w-max rounded-t-lg" src={imgCard} alt="" />
            <div className="p-6">
              <h2 className="text-2xl text-white">Titolo</h2>
              <p className="p-2 text-gray-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                est possimus eligendi totam optio beatae harum inventore.
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="bg-gray-800 w-80 rounded-lg">
            <img className="w-max rounded-t-lg" src={imgCard} alt="" />
            <div className="p-6">
              <h2 className="text-2xl text-white">Titolo</h2>
              <p className="p-2 text-gray-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                est possimus eligendi totam optio beatae harum inventore.
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="bg-gray-800 w-80 rounded-lg">
            <img className="w-max rounded-t-lg" src={imgCard} alt="" />
            <div className="p-6">
              <h2 className="text-2xl text-white">Titolo</h2>
              <p className="p-2 text-gray-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                est possimus eligendi totam optio beatae harum inventore.
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="bg-gray-800 w-80 rounded-lg">
            <img className="w-max rounded-t-lg" src={imgCard} alt="" />
            <div className="p-6">
              <h2 className="text-2xl text-white">Titolo</h2>
              <p className="p-2 text-gray-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                est possimus eligendi totam optio beatae harum inventore.
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;

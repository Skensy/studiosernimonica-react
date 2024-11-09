import { div } from "framer-motion/client";
import "./index.css";
import fakeMaps from "./assets/fake-google-maps.jpg";

function Mappa() {
  const fakeGoogleMaps = (
    <div className="flex justify-center place-items-center mt-6 mb-36 px-6">
      <img src={fakeMaps} alt="" width={1100} height={400} />
    </div>
  );

  const googleMaps = (
    <div className="justify-center place-items-center">
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD5wRJfUMZOaKAF9IHMlgzwVY_pYOciq8M&q=Space+Needle,Seattle+WA"
      />
    </div>
  );

  return (
    <>
      <div className="flex flex-col justify-center place-items-center px-12 sm:px-12 md:px-36 lg:px-48 xl:px-96 mt-36">
        <h2 className="font-semibold text-4xl text-center mb-2 text-gray-700">
          PASSA A TROVARCI A VITERBO PER UNA CONSULENZA
        </h2>
        <p className="font-light">
          Il nostro studio situato a Viterbo, in Largo Igino Garbini 7, ti
          aspetta per qualsiasi chiarimento e/o consulenza.
        </p>
      </div>
      {fakeGoogleMaps}
    </>
  );
}

export default Mappa;

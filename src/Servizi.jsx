import "./index.css";
import NavbarFirst from "./NavbarFirst.jsx";
import Slider from "./Slider.jsx";
import Cards from "./CardLists.jsx";
import serviziImg from "./assets/servizi.jpg"
import ServiziContent from "./ServiziContent.jsx";
import Footer from "./Footer.jsx";

function serviziPage() {
  return (
    <>
      <NavbarFirst />
      <Slider
        title="SERVIZI"
        subtitle="consulente del lavoro"
        gradient=""
        imgUrl={serviziImg}
      />
      <ServiziContent />
      <Cards />
      <Footer />
    </>
  );
}

export default serviziPage;

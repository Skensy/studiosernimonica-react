import "./index.css";
import logo from "./assets/logo-studio-serni-monica.png";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer>
        <div className="flex justify-around w-full bg-gray-700 flex-wrap py-12">
          <div className="flex flex-col justify-center text-white text-xs w-24">
            <p>P.IVA 01266500568</p>
            <p>LARGO IGINO GARBINI 7</p>
            <p>VITERBO 01100</p>
            <p>INFO@STUDIOSERNIMONICA.IT</p>
          </div>
          <div className="flex justify-center items-center hidden md:block">
            <Link to="/" onClick={scrollToTop}>
              <img
                className="min-h-24 min-w-24 max-h-36 max-w-36"
                src={logo}
                alt="logo-studio-serni-monica"
              />
            </Link>
          </div>
          <div className="flex items-center font-light w-24">
            <ul className="text-end">
              <Link to="" onClick={scrollToTop}>
                <li>
                  <span className="text-white text-sm">HOME</span>
                </li>
              </Link>
              <li>
                <Link to="/contatti" onClick={scrollToTop}>
                  <span className="text-white text-sm">CONTATTI</span>
                </Link>
              </li>
              <li>
                <Link to="/servizi" onClick={scrollToTop}>
                  <span className="text-white text-sm">SERVIZI</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop}>
                  <span className="text-white text-sm">FAQ</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy" onClick={scrollToTop}>
                  <span className="text-white text-sm">PRIVACY</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

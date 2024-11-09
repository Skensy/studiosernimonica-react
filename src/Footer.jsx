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
        <div className="flex justify-around w-full bg-gray-700">
          <div className="flex justify-start">
            <Link to="" onClick={scrollToTop}>
              <img
                className="min-h-36 min-w-36 max-h-36 max-w-36"
                src={logo}
                alt="logo-studio-serni-monica"
              />
            </Link>
          </div>
          <div className="flex">
            <ul className="text-center text-white">
              <Link to="" onClick={scrollToTop}>
                <li>HOME</li>
              </Link>
              <Link to="/contatti" onClick={scrollToTop}>
                <li>CONTATTI</li>
              </Link>
              <Link to="/servizi" onClick={scrollToTop}>
                <li>SERVIZI</li>
              </Link>
              <Link to="/faq" onClick={scrollToTop}>
                <li>FAQ</li>
              </Link>
              <Link to="/privacy" onClick={scrollToTop}>
                <li>PRIVACY</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

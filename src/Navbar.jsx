import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Navbar.css";
import logo from "./assets/logo-studio-serni-monica.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="flex justify-center items-center flex-wrap justify-around absolute z-30 w-full">
        <div className="flex items-center w-auto justify-between">
          <a href="/index.html">
            <img
              className="h-36 min-w-min "
              src={logo}
              alt="logo-studio-serni-monica"
            />
          </a>
          <a href="/index.html" className="no-underline sm:hidden md:block">
            <h1 className="text-2xl text-white font-light">STUDIO SERNI MONICA</h1>
          </a>
        </div>
        <div className="z-30">
          <Menu>
            <MenuButton className="w-36">MENU</MenuButton>
            <MenuItems anchor="bottom" className="w-36 z-30">
              <MenuItem className="content-center">
                <a className="block data-[focus]:bg-blue-100 bg-white text-center h-12" href="/index.html">
                  Home
                </a>
              </MenuItem>
              <MenuItem className="content-center">
                <a className="block data-[focus]:bg-blue-100 bg-white text-center h-12" href="/contatti.html">
                  Contatti
                </a>
              </MenuItem>
              <MenuItem className="content-center">
                <a className="block data-[focus]:bg-blue-100 bg-white text-center h-12" href="#">
                  Servizi
                </a>
              </MenuItem>
              <MenuItem className="content-center">
                <a className="block data-[focus]:bg-blue-100 bg-white text-center h-12" href="#">
                  FAQ
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

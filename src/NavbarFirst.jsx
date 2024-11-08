import { useState } from "react";
import "./index.css";
import logo from "./assets/logo-studio-serni-monica.png";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";

function NavbarFirst() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Contatti", "Servizi", "FAQ"];
  const linkItems = ["", "contatti", "servizi", "faq"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="h-24 bg-gray-700 z-30 -mt-24 drop-shadow-xl "
    >
      <NavbarContent>
        <NavbarBrand>
          <Link to="/">
            <img
              className="min-h-36 min-w-36 max-h-36 max-w-36"
              src={logo}
              alt="logo-studio-serni-monica"
            />
          </Link>
          <Link to="/">
            <p className="font-bold text-white">STUDIO SERNI MONICA</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="bg-transparent text-white"
        />
      </NavbarContent>
      <div className="flex ">
        <NavbarMenu className="py-6 items-center mt-8 bg-gray-700/50">
          {menuItems.map((item, index) => (
            <NavbarMenuItem className="" key={`${item}-${index}`}>
              <div className="bg-gray-500 text-white w-96 text-center justify-center uppercase text-xl p-4 rounded-xl mt-4">
                <Link to={`/${linkItems[index]}`} size="lg">
                  {item}
                </Link>
              </div>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>
    </Navbar>
  );
}

export default NavbarFirst;

import { useState } from "react";
import "./index.css";
import logo from "./assets/logo-studio-serni-monica.png";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";



function NavbarFirst() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Contatti", "Servizi", "FAQ", "Gestione Paghe e Contributi"];
  const linkItems = ["index.html", "contatti.html", "servizi.html", "faq.html", "gestione-paghe-e-contributi-2.html"]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="h-24 bg-gray-700 z-30 -mt-24">
      <NavbarContent>
        <NavbarBrand>
          <a href="/index.html">
            <img
              className="min-h-36 min-w-36 max-h-36 max-w-36"
              src={logo}
              alt="logo-studio-serni-monica"
            />
          </a>
          <a href="/index.html">
            <p className="font-bold text-white">STUDIO SERNI MONICA</p>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="bg-transparent text-white"
        />
      </NavbarContent>
      <NavbarMenu className="justify-start mt-8 bg-gray-700/50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="" key={`${item}-${index}`}>
            <Link
              className="bg-gray-500 text-white w-full justify-center uppercase text-lg p-4 rounded-xl mt-4"
              href={`/${linkItems[index]}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarFirst;
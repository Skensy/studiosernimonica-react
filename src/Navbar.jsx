import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Navbar.css'
import logo from './assets/logo-studio-serni-monica.png'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <img className='h-36' src={logo} alt="logo-studio-serni-monica" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contacts</li>
          <li>Help Me</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Navbar.css'
import logo from './assets/logo-studio-serni-monica.png'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='flex justify-center items-center flex-wrap'>
        <div className='flex justify-center items-center w-auto mr-32'>
          <a href="#"><img className='h-36 min-w-min ' src={logo} alt="logo-studio-serni-monica" /></a>
          <a href="#" className='no-underline'><h1 className='text-2xl'>STUDIO SERNI MONICA</h1></a>
        </div>
        <ul className='flex gap-8'>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Contatti</li></a>
          <a href="#"><li>Servizi</li></a>
          <a href="#"><li>FAQ</li></a>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

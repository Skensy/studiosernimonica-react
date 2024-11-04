import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Slider  from './Slider.jsx'
import Midcontent from './Midcontent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Slider />
    <Midcontent />
  </StrictMode>,
)

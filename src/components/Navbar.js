import React from 'react'
import { useGlobalContext } from '../context/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faLinkedin,faTwitch} from '@fortawesome/free-brands-svg-icons'
import {faHouse,faBars} from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
function Navbar() {
    const {openSidebar} = useGlobalContext();
  return (
    <nav>
        <div className="logo-icona">
            <div className="logo">
                <a href="/"> <FontAwesomeIcon icon={faHouse} />NavBar</a>
            </div>
            <div className="icona-mobile" onClick={openSidebar}>
                <FontAwesomeIcon className='icona' icon={faBars} />
            </div>
        </div>
        
        <div className="list">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Chi Siamo</a></li>
                <li><a href="/">Contattaci</a></li>
                <li><a href="/">Informazioni</a></li>
            </ul>
        </div>

        <div className="social">
            <ul>
                <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="/"> <FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="/"> <FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="/"> <FontAwesomeIcon icon={faTwitch} /></a></li>
            </ul>

        </div>
    </nav>
  )
}



export default Navbar
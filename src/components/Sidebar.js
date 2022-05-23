import React from 'react'
import { useGlobalContext } from '../context/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faLinkedin,faTwitch} from '@fortawesome/free-brands-svg-icons'
import './sidebar.css'
function Sidebar() {
   const {isOpenSidebar,closeSidebar}= useGlobalContext();
    return (
        <aside className={`sidebar ${isOpenSidebar ? 'show-sidebar' : ''}`}>
            <header>
                <h2>Sidebar</h2>
                <button className='button-sidebar' onClick={closeSidebar}> x</button>
            </header>
            <main>
                <div className="list-sidebar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Chi Siamo</a></li>
                        <li><a href="/">Contattaci</a></li>
                        <li><a href="/">Informazioni</a></li>
                    </ul>
                </div>
            </main>
            <footer>
                <div className="social-sidebar">
                    <ul>
                        <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a href="/"> <FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="/"> <FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="/"> <FontAwesomeIcon icon={faTwitch} /></a></li>
                    </ul>

                </div>
            </footer>
        </aside>
 
    )
}

export default Sidebar
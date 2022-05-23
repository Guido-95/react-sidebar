import React from 'react'
import './modal.css'
import{useGlobalContext} from '../context/context'

function Modal() {
   const  {isModalOpen,closeModal} = useGlobalContext();
  return (
    <div className={`overlay-hidden ${isModalOpen ? "show-modal-overlay " : ""}`}>
        <section className={`${isModalOpen ? "show-modal modal" : "modal"}`}>
            <div className='modal-content'>
                <img src='https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='img-pc'/>
            </div>
            <button className="btn btn-delete btn-modal" onClick={closeModal}>
                X
            </button>
        </section>
    </div>
    
  )
}

export default Modal
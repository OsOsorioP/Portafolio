import { IoIosMail } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";

import React from 'react'

export const Contact = () => {
  return (
    <>
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__title">
            <p>Contacto</p>
            <h3>Déjame un email, te responderé lo antes posible.</h3>
          </div>
          <div className="contact__icons">
            <div className="contact__icon-box">
              <span>
                <i><FaMapMarkedAlt size={30}/></i>
              </span>
              <div className="contact__info">
                <h3>Ubicación</h3>
                <p>Colombia</p>
              </div>
            </div>

            <div className="contact__icon-box">
              <span>
                <IoIosMail size={30}/>
              </span>
              <div className="contact__info">
                <h3>Correo</h3>
                <a href="mailto:oscar.osorio1884@gmail.com">
                  oscar.osorio1884@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

import React from 'react'

export const Footer = () => {
  let days = ["Domingo","Lunes","Marte","Miércoles","Jueves","Viernes","Sábado"]
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3 id="time">
            </h3>
            <div className="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/oscar-osorio-dev/"
              >
                <FaLinkedin width={30} height={30} />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/oscar-osorio-dev"
              >
                <IoLogoGithub width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

import { ProBox } from "./ProBox";
import { BsStars } from "react-icons/bs";
import vite from "../assets/vite.svg";

import img from '../assets/butikk.png';

import React from 'react';

export const Projects = () => {
  const taechs = {
    techno1: vite,
    techno2: 'gh'
  }
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          {<div className="project-content">
            <p>portfolio</p>
            <h3>Projects developed with great dedication. <BsStars color="#147efb" size={30} /></h3>
            <div className="projects-grid">
              <ProBox
                title="Ecommerce Butikk"
                img={img}
                description="With a keen emphasis on simplicity and sleek design, this store prioritizes user experience, ensuring customers can effortlessly discover and purchase the products they desire."
                techno1="https://skillicons.dev/icons?i=vite"
                techno2="https://skillicons.dev/icons?i=react"
                techno3="https://skillicons.dev/icons?i=scss"
                code="https://github.com/Oscar-Osorio-Dev/ecommerce-butikk"
                demo="https://butikk-ecommerce.vercel.app"
              />

              <ProBox
                title="project incoming..."
                img1=""
                description="project incoming..."
                techno1="https://skillicons.dev/icons?i=flask"
                techno2="https://skillicons.dev/icons?i=mysql"
                techno3="https://skillicons.dev/icons?i=tailwind"
                code="#projects"
                demo="#projects"
              />

              <ProBox
                title="project incoming..."
                img1=""
                description="project incoming..."
                techno1="https://skillicons.dev/icons?i=flask"
                techno2="https://skillicons.dev/icons?i=postgres"
                techno3="https://skillicons.dev/icons?i=tailwind"
                code="#projects"
                demo="#projects"
              />

              <ProBox
                title="project incoming..."
                img1=""
                description="project incoming..."
                techno1="https://skillicons.dev/icons?i=flask"
                techno2="https://skillicons.dev/icons?i=mongodb"
                techno3="https://skillicons.dev/icons?i=tailwind"
                code="#projects"
                demo="#projects"
              />
            </div>
          </div>}
        </div>
      </section>
    </>
  )
}

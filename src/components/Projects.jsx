import { ProBox } from "./ProBox";
import { BsStars } from "react-icons/bs";
import vite from "../assets/vite.svg";

import img from '../assets/butikk.png';

import React from 'react';

export const Projects = () => {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          {<div className="project-content">
            <p>portafolio</p>
            <h3>Proyectos desarrollados con gran dedicación. <BsStars color="#147efb" size={30} /></h3>
            <div className="projects-grid">
              <ProBox
                title="E-commerce Butikk"
                img={img}
                description="Pienso que la simplicidad y el diseño elegante de esta tienda prioriza la experiencia del usuario, garantizando que los clientes puedan descubrir y comprar sin esfuerzo los productos que desean."
                techno1="https://skillicons.dev/icons?i=react"
                techno2=""
                techno3="https://skillicons.dev/icons?i=scss"
                code="https://github.com/Oscar-Osorio-Dev/ecommerce-butikk"
                demo="https://butikk-ecommerce.vercel.app"
              />

              <ProBox
                title="Task"
                img1=""
                description="Proyecto entrante..."
                techno1="https://skillicons.dev/icons?i=react"
                techno2="https://skillicons.dev/icons?i=mongodb"
                techno3="https://skillicons.dev/icons?i=css"
                code="#projects"
                demo="#projects"
              />

              <ProBox
                title="Proyecto entrante..."
                img1=""
                description="Proyecto entrante..."
                techno1="https://skillicons.dev/icons?i=flask"
                techno2="https://skillicons.dev/icons?i=postgres"
                techno3="https://skillicons.dev/icons?i=tailwind"
                code="#projects"
                demo="#projects"
              />

              <ProBox
                title="Proyecto entrante..."
                img1=""
                description="Proyecto entrante..."
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

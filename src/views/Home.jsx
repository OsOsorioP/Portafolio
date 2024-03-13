import React from "react"
import { Nav } from "../components/Nav"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"

export const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}


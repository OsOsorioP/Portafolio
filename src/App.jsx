import { Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Projects } from "./components/Projects";

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route index path="/" element={<Hero/>} />
        <Route path="/proyectos" element={<Projects/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

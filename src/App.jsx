import { lazy, Suspense } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer";

// Lazy load the 3D components
//const ModelViewer = lazy(() => import('./components/3D/ModelViewer'));

export default function App() {
  return (
    <>
      <Navbar />
      <main className="space-y-20 md:space-y-32">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
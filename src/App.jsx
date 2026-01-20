import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Navbar />
      <main className="space-y-20 md:space-y-32">
        <Hero />
        <About />
          <Portfolio />
        <Skills />
        <Experience />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
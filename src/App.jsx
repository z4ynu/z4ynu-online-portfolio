import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import TechStack from "./components/TechStack"
import Projects from "./components/Projects"
import Hobbies from "./components/Hobbies"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Toaster } from "sonner"

function App() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}

export default App

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Mission from "./pages/Mission"
import Space from "./pages/Space"
import Welcome from "./pages/Welcome"

function App() {

  return (
    <>
      <Navbar />
      <Welcome />
      <Space />
      <About />
      <Mission />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App

import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"

function App() {
  return (
    <div className = "app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

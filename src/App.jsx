import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Menu from './Menu.jsx'
import Contact from './Contact.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'

function App() {
  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Partners from './components/Partners'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="bg">
     <Navbar/>
     <Home/>
    </div>
    <div className="bg-2">
    <About/>
    <Partners/>
    <Testimonials/>
    <Services/>
    <Footer/>
    </div>
    </>
  )
}

export default App

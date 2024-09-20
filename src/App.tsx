import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {
 
  return (
   <>
     <Navbar/>
   <Routes>
  
   <Route path='/' Component={Home}/>
   <Route path='/about' Component={About}/>
   <Route path='/services' Component={Services}/>
   <Route path='/projects' Component={Project}/>
   <Route path='/contact' Component={Contact}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App

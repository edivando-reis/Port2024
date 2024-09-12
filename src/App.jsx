import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//Components
import styles from './styles';
import Home from "./pages/home/home"
import Projects from "./pages/projects/project"
import Personal from "./pages/personal/personal"
import AboutMe from "./pages/aboutMe/aboutMe" 
import Footer from "./pages/footer/footer"






function App() {
  
  const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
   
   <main className= {`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
                      border-t-4 border-b-4 ${darkTheme ? "border-dark-secondary" : "border-light-secondary"}
                      ${styles.Layout}                      
                    `}>
        <Router>
         
            <Routes location={location}>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/personal" element={<Personal/>} />
            <Route path="/aboutMe" element={<AboutMe/>} />
            <Route path="/contact" element={<Footer/>} />
          </Routes>
            
          
        </Router>

   </main>
    
  )
}

export default App

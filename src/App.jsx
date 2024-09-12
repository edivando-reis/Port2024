import { useSelector } from 'react-redux';

//Components
import styles from './styles';
import Home from "./pages/home/home"
/* import Cases from "./pages/cases/cases" 
import Personal from "./pages/personal/personal"
import AboutMe from "./pages/aboutMe/aboutMe" 
import Footer from "./pages/footer/footer" */





function App() {
  
  const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
   
   <main className= {`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
                      border-t-4 border-b-4 ${darkTheme ? "border-dark-secondary" : "border-light-secondary"}
                      ${styles.Layout}                      
                    `}>
      <Home/>  
       {/*  <Cases/> */}
        {/* <Personal/> */}
     {/*  <AboutMe /> */}
     {/* <Footer/> */}
   </main>
    
  )
}

export default App

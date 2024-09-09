import { useSelector } from 'react-redux';

//Components
import styles from './styles';
/* import Home from "./pages/home" */
import Cases from "./pages/cases/cases"




function App() {
  
  const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
   
   <main className= {`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
                      border-t-4 border-b-4 ${darkTheme ? "border-dark-secondary" : "border-light-secondary"}
                      ${styles.Layout}                      
                    `}>
       {/*  <Home/> */}
        <Cases/>
        
    
   </main>
    
  )
}

export default App

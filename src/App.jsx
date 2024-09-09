import { useSelector } from 'react-redux';

//Components
import styles from './styles';
import Navbar from './components/Navbar';

function App() {
  
  const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
   
   <main className= {`${darkTheme ? "bg-dark-primary" : "bg-light-primary"} 
                      ${styles.Layout}                      
                      border border-red-600                      
                      `}>
   
    <Navbar/>
   </main>
    
  )
}

export default App

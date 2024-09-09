import Navbar from '../../components/Navbar'
import Hero from "../../components/Hero"

const Header = () => {
  return (
    <header className={`w-[1310px] h-[980px] flex flex-col  items-center `}>
        <Navbar/> 
        <Hero/>
        </header>
  )
}

export default Header

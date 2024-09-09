import Navbar from '../../components/Navbar'
import Hero from "./Hero"

const Header = () => {
  return (
    <header className={`w-[1310px] h-[980px] flex flex-col  items-center  border border-red-400`}>
        <Navbar/> 
        <Hero/>
        </header>
  )
}

export default Header

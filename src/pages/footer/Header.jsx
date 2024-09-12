import Navbar from '../../components/Navbar'
import Hero from "./Hero"

const Header = () => {
  return (
    <header className={`xl:w-[1310px] xl:h-[980px] flex flex-col  items-center`}>
        <Navbar/> 
        <Hero/>
        </header>
  )
}

export default Header

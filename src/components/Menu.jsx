import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Menu = () => {
    
    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`flex flex-col w-[29px] h-[500px]  ${darkTheme ? "text-dark" : "text-light"}`}>
        <li className="flex flex-col">
            <ul className={`py-2 text-center lg:h-[90px] w-[29px] h-[100px] writing-vertical font-manrope font-light`}><Link to="/">home</Link></ul>
            <ul className={`py-2 text-center lg:h-[90px] w-[29px] h-[100px] writing-vertical font-manrope font-light`}><Link to="/projects">projects</Link></ul>
            <ul className={`py-2 text-center lg:h-[90px] w-[29px] h-[100px] writing-vertical font-manrope font-light`}><Link to="/personal">personal</Link></ul>
            <ul className={`py-2 text-center lg:h-[90px] w-[29px] h-[100px] writing-vertical font-manrope font-light`}><Link to="/aboutMe">about me</Link></ul>
            <ul className={`py-2 text-center lg:h-[90px] w-[29px] h-[100px] writing-vertical font-manrope font-light`}><Link to="/contact">contact</Link></ul>
        </li>
    </div>  
  )
}

export default Menu


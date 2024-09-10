import { useSelector } from "react-redux"


const Menu = () => {
    
    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`flex flex-col w-[29px] h-[500px]  ${darkTheme ? "text-dark" : "text-light"}`}>
        <li className="flex flex-col">
            <ul className={`py-2 text-center lg:h-[90px] w-[29px] h-[100px] writing-vertical font-manrope font-light`}><a href="#">home</a></ul>
            <ul className={`py-2 text-center lg:h-[90px] w-[29px] h-[100px] writing-vertical font-manrope font-light`}><a href="#">case</a></ul>
            <ul className={`py-2 text-center lg:h-[90px] w-[29px] h-[100px] writing-vertical font-manrope font-light`}><a href="#">projects</a></ul>
            <ul className={`py-2 text-center lg:h-[90px] w-[29px] h-[100px] writing-vertical font-manrope font-light`}><a href="#">about me</a></ul>
            <ul className={`py-2 text-center lg:h-[90px] w-[29px] h-[100px] writing-vertical font-manrope font-light`}><a href="#">contact</a></ul>
        </li>
    </div>  
  )
}

export default Menu


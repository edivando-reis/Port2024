import { useSelector } from "react-redux"


const Menu = () => {
    
    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`flex flex-col w-[29px] h-[500px]  ${darkTheme ? "text-dark" : "text-light"}`}>
        <li className="flex flex-col">
            <ul className={`py-2 text-center w-[29px] h-[100px] writing-vertical font-manrope font-light`}><a href="#">home</a></ul>
            <ul className={`py-2 text-center w-[29px] h-[100px] writing-vertical font-manrope font-light`}><a href="#">case</a></ul>
            <ul className={`py-2 text-center w-[29px] h-[100px] writing-vertical font-manrope font-light`}><a href="#">projects</a></ul>
            <ul className={`py-2 text-center w-[29px] h-[100px] writing-vertical font-manrope font-light`}><a href="#">about me</a></ul>
            <ul className={`py-2 text-center w-[29px] h-[100px] writing-vertical font-manrope font-light`}><a href="#">contact</a></ul>
        </li>
    </div>  
  )
}

export default Menu

{/* <nav class="flex flex-col w-48">
  <a href="#home" class="py-2 text-center hover:bg-gray-200">home</a>
  <a href="#projects" class="py-2 text-center hover:bg-gray-200">projects</a>
  <a href="#about-me" class="py-2 text-center hover:bg-gray-200">about me</a>
  <a href="#cases" class="py-2 text-center bg-blue-500 text-white">cases</a> <!-- Item selecionado -->
  <a href="#contact" class="py-2 text-center hover:bg-gray-200">contact</a>
</nav> */}
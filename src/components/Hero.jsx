import { useSelector } from 'react-redux'
import Menu from '../pages/home/Menu'
import Title from "../pages/home/Title"
import Botao from "./Botao"

const Hero = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`${darkTheme ? "text-light" : "text-dark"} w-[1310px] h-[700px] flex items-center lg:mt-[0px] mt-[110px]`}>
        <Menu/>
        <Title/>
        <Botao/>
    </div>
  )
}

export default Hero
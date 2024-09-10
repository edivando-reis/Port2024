import { useSelector } from 'react-redux'
import Menu from '../../components/Menu'

import Botao from "./Botao"
import Carousel from "../../components/Carousel"
const Hero = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`${darkTheme ? "text-light" : "text-dark"} w-[1310px] h-[700px] flex items-center mt-[110px] `}>
        <Menu/>
        <Carousel/>
        <Botao/>
    </div>
  )
}

export default Hero
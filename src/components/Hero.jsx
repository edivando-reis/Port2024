import { useSelector } from 'react-redux'
import Menu from '../components/Menu'
import Title from "../pages/home/Title"
import Botao from "./Botao"

const Hero = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`${darkTheme ? "text-light" : "text-dark"} xl:w-[1310px] xl:h-[700px] flex items-center lg:mt-[0px] xl:mt-[110px]`}>
        <Menu/>
        <Title/>
        <Botao/>
    </div>
  )
}

export default Hero
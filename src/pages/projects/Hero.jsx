import { useSelector } from 'react-redux'
import Menu from '../../components/Menu'

import Botao from "./Botao"
import Carousel from './Carousel'

const Hero = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`${darkTheme ? "text-light" : "text-dark"} xl:w-[1310px] xl:h-[700px] flex items-center mt-[110px] `}>
        <Menu/>
        <Carousel/>
        <Botao/>
    </div>
  )
}

export default Hero
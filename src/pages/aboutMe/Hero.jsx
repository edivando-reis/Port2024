import { useSelector } from 'react-redux'
import Menu from '../../components/Menu'

import Botao from "./Botao"
import Layout from "./Layout"
const Hero = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`${darkTheme ? "text-light" : "text-dark"} w-[1310px] h-[700px] flex items-center mt-[110px] `}>
        <Menu/>
        <Layout />
        <Botao/>
    </div>
  )
}

export default Hero
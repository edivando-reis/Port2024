import { useSelector } from "react-redux"


const Title = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`BOXTITLE xl:w-[1310px] xl:h-[700px] flex flex-row items-center `}>

    <div className={`xl:w-[566px] x:lh-[65px] flex flex-col text-center xl:ml-[337px] ${darkTheme ? "text-dark" : "text-light"}`}>
        <h1 className={`font-dotGothic font-medium text-[20px]`}>Edivando Reis de Siqueira</h1>
        <h1 className={`font-dotGothic font-medium text-[43px] `}>front-end.web(developer)</h1>
        </div>
    </div>
  )
}

export default Title
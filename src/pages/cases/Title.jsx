import { useSelector } from "react-redux"


const Title = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`w-[566px] h-[65px] flex flex-col text-center ml-[337px] border border-yellow-400 ${darkTheme ? "text-dark" : "text-light"}`}>
        <h1 className={`font-dotGothic font-medium text-[20px]`}>Edivando Reis de Siqueira</h1>
        <h1 className={`font-dotGothic font-medium text-[43px] `}>front-end.web(developer)</h1>
        </div>
  )
}

export default Title
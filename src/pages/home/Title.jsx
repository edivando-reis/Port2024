import { useSelector } from "react-redux"


const Title = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`w-[566px] h-[150px] flex flex-col lg:justify-center text-center lg:ml-[300px]`}>

    <div className={`w-[566px] h-[95px] flex flex-col text-center
                      lg:ml-[40px]
                      ml-[337px] ${darkTheme ? "text-dark" : "text-light"}`}>
        <h1 className={`font-dotGothic font-medium text-[20px]`}>Edivando Reis de Siqueira</h1>
        <h1 className={`font-dotGothic font-medium text-[43px]`}>front-end.web(developer)</h1>
        </div>
    </div>
  )
}

export default Title
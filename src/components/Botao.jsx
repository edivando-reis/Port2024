import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../.."



const Botao = () => {
    const dispatch = useDispatch()
    const darkTheme = useSelector((state) => state.theme.darkTheme)

    const handleClick = () => {
        dispatch(toggleTheme())
    }
  return (
    <button
    onClick={handleClick}
    className={`${darkTheme ? "text-dark" : "text-light"} w-[87px] h-[19px] ml-[09px] mt-[400px] rotate-90`}>
        <span className={`text-[14px] font-manrope font-extrabold `}>
            {darkTheme ? "light mode": "dark mode"}
        </span>
    </button>
  )
}

export default Botao
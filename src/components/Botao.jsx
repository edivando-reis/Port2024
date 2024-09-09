import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../../themeSlice"



const Botao = () => {
    const dispatch = useDispatch()
    const darkTheme = useSelector((state) => state.theme.darkTheme)

    const handleClick = () => {
        dispatch(toggleTheme())
    }
  return (
    <button
    onClick={handleClick}
    className={`${darkTheme ? "text-dark" : "text-light"} w-[87px] h-[19px] ml-[339px] mt-[400px] rotate-90`}>
        <span className={`text-[14px] font-manrope font-extrabold `}>
            {darkTheme ? "light mode": "dark mode"}
        </span>
    </button>
  )
}

export default Botao
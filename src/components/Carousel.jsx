import { useSelector } from "react-redux"


const Carousel = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div className={`${darkTheme? "text-dark" : "text-light"}-`}>
        <div  className={`w-[1200px] h-[397px] border border-red-400 ml-[50px]`}></div>
    </div>
  )
}

export default Carousel
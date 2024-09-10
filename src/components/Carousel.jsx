import { useSelector } from "react-redux"

import INSEP from "../assets/img/INSEPPORT.png"
import RUDA from "../assets/img/ATELIEPORT.png"
import FELIPE from "../assets/img/FELIPEPORT.png"

const Carousel = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div className={`${darkTheme? "text-dark" : "text-light"}-`}>
        <div  className={`BOX flex flex-row xl:w-[1100px] xl:h-[397px]  xl:ml-[50px]`}>
          <div className={`TITLE xl:w-[57px] xl:h-[217px] flex flex-row}`}>
            <h1 className={`${darkTheme ? "text-dark" : "text-light"}
                            py-2 
                            text-center 
                            xl:w-[41px] 
                            xl:h-[217px] 
                            writing-vertical 
                            font-manrope 
                            text-[23px] 
                            font-extrabold 
                          `}>amazing projects
            </h1>
            <div className={`${darkTheme? "bg-white" : "bg-black"} w-[7px] h-[90px] mt-[15px]`}></div>
          </div>
          <div className={`CAROUSELBOX xl:w-[1100px] xl:h-[321px] flex flex-row gap-12 justify-center`}>
            <div className={`SLIDE1 ${darkTheme? "text-dark" : "text-light"} xl:w-[281px] xl:h-[321px] flex flex-col`}>
              <div className={`BOXIMG xl:w-[281px] xl:h-[281px] ${darkTheme? "bg-gray-400" : "bg-gray-100"}`}>
                <img src={INSEP} alt="" />
              </div>
              <div className={`TEXT text-[18px] font-extrabold font-manrope`}>
                <a href="https://insep.org.br/"
                   target="_blank" 
                   rel="noreferrer"
                   >INSEP</a></div>
            </div>
            <div className={`SLIDE2 ${darkTheme? "text-dark" : "text-light"} xl:w-[281px] xl:h-[321px] `}>
            <div className={`BOXIMG xl:w-[281px] xl:h-[281px] ${darkTheme? "bg-gray-400" : "bg-gray-100"}`}>
            <img src={RUDA} alt="" />
            </div>
            <div className={`TEXT text-[18px] font-extrabold font-manrope`}>
                <a href="https://www.ruda.art.br/"
                   target="_blank" 
                   rel="noreferrer"
                   >Ateliê Rudá</a></div>
            </div>
            <div className={`SLIDE3 ${darkTheme? "text-dark" : "text-light"} xl:w-[281px] xl:h-[321px] `}>
            <div className={`BOXIMG xl:w-[281px] xl:h-[281px] ${darkTheme? "bg-gray-400" : "bg-gray-100"}`}>
            <img src={FELIPE} alt="" />
            </div>
            <div className={`TEXT text-[18px] font-extrabold font-manrope`}>
                <a href="#"
                   target="_blank" 
                   rel="noreferrer"
                   >Portfolio Felipe fotografia</a></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Carousel
import { useSelector } from "react-redux"

import LINKEDINBLACK from "../../assets/img/linkedinBLACK.png"
import LINKEDINWHITE from "../../assets/img/linkedinWHITE.png"
import INSTAGRAMBLACK from "../../assets/img/instagramBLACK.png"
import INSTAGRAMWHITE from "../../assets/img/instagramWHITE.png"
import GITHUBWHITE from "../../assets/img/githubWHITE.png"
import GITHUBBLACK from "../../assets/img/githubBLACK.png"

const Layout = () => {

  const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`CONTACT ${darkTheme? "text-dark" : "text-light"} xl:xl:w-[1310px] flex flex-col items-center xl:h-[261.63px] `}>
      <div className="BOXCONTACT flex flex-col items-center xl:w-[624px] h-[261.63px] ">
        <div className="TITLE xl:w-[269px] flex flex-col items-center xl:h-[57px] ">
          <span className={`xl:text-[30px] font-extrabold font-manrope`}>contact me</span>
          <div className={`BAR xl:w-[90px] xl:h-[7px] ${darkTheme? "bg-light-primary" : "bg-dark-primary"}`}>

          </div>
         </div>
          <div className="BOXSOCIAL xl:w-[624px] xl:h-[35.57px] xl:mt-[62px] flex flex-row justify-center xl:gap-[84.88px]">
            <div className={`LINKEDIN xl:w-[35.57px] xl:h-[33.57px] `}> <a href="#"><img src={darkTheme? LINKEDINWHITE : LINKEDINBLACK} alt="" /></a> </div>
            <div className={`INSTAGRAM xl:w-[35.57px] xl:h-[33.57px] `}> <a href="#"><img src={darkTheme? INSTAGRAMWHITE : INSTAGRAMBLACK} alt="" /></a> </div>
            <div className={`GITHUB xl:w-[35.57px] xl:h-[33.57px] `}> <a href="#"><img src={darkTheme? GITHUBWHITE : GITHUBBLACK} alt="" /></a> </div>
          </div>
          <div className={`TEXT ${darkTheme? "text-dark" : "text-light"} flex flex-col xl:w-[220px] xl:h-[50.63px] text-center xl:mt-[78px]`}> 
            <span className={`font-manrope xl:text-[18px] xl:w-[220px] xl:h-[28.63px] font-semibold`}>Let's work together</span> 
            <div className={`bar xl:w-[18.39px] xl:h-[1px] ${darkTheme? "bg-light-primary" : "bg-dark-primary"} xl:ml-[28px]`}></div>
          </div>
          <div className={`FOOTER 
                           xl:w-[1290px] xl:h-[49px]
                           flex 
                           justify-between
                           items-center
                           xl:mt-[300px] 
                           xl:ml-[60px]`}> 
              <span className={`font-manrope xl:text-[36px] font-extrabold`}>
                ers.
              </span> 
              <span className={`font-manrope xl:text-[12px] font-light`}>coding by me</span>
          </div>
      </div>
     
    </div>
  )
}

export default Layout
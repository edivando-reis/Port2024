import { useSelector } from "react-redux"

import PERFIL from "../../assets/img/perfil.jpg"
import DESIGNBLACK from "../../assets/img/design.svg"
import DESIGNWHITE from "../../assets/img/designWhite.png"
import HTMLBLACK from "../../assets/img/htmlBLACK.png"
import HTMLWHITE from "../../assets/img/htmlWHITE.png"
import REACTBLACK from "../../assets/img/reactBLACK.png"
import REACTWHITE from "../../assets/img/reactWHITE.png"
import WORDBLACK from "../../assets/img/WordpressBlack.png"
import WORDWHITE from "../../assets/img/wordpressWhite.png"


const Layout = () => {

    const darktheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`BOXABOUT ${darktheme? "text-dark" : "text-light"} xl:w-[1310px] xl:h-[813px] flex flex-col items-center justify-center `}>
        <div className="TITLE xl:w-[142px] xl:h-[60px] flex flex-col ">
            <h1 className={`xl:text-[30px] font-manrope font-extrabold`}>about me</h1>
        <div className={`BAR ${darktheme? "bg-light-primary" : "bg-dark-primary"} xl:w-[90px] xl:h-[7px] `}></div>
        </div>
        <div className="IMG&NAME xl:w-[1030px] flex flex-row items-center xl:h-[198px]  xl:ml-[80px] xl:mt-[82px] ">
            <div className="IMG xl:w-[198px] xl:h-[198px] "><img className="xl:w-[198px] xl:h-[198px] rounded-[151px]" src={PERFIL} alt="" /></div>
            <div className="NAME xl:w-[761px] xl:h-[168px] flex flex-col xl:ml-[57px] ">
                <div className={`AUTHOR font-manrope xl:text-[30px] font-extrabold`}>Edivando Reis de Siqueira</div>
                <div className={`DESC xl:w-[761px] xl:h-[76px] xl:text-[14px] flex items-center font-manrope font-extralight `}>
                    I'm more than one in love for Front-End. My experience with interface design turn me one extremely criterious with
                    alignments, margins, colors and a lot other resorces in CSS. Today I work with projects in a whole world. Codifiding in my
                    home office, in a quiet interior of São Paulo, Brazil.
                </div>
                <div className={`CONTACT flex flex-row xl:gap-[10px] xl:w-[216] xl:h-[19px] xl:mt-[19px]`}>
                    <span><a href="">INSTAGRAM</a></span>
                    <span><a href="">GITHUB</a></span>
                    <span><a href="">EMAIL</a></span>
                </div>
            </div>
        </div>
        <div className={`EXP1BOX xl:w-[1180px] xl:h-[72px] flex flex-row xl:gap-[34px]  xl:mt-[74px] `}>
            <div className={`EXP1BOX xl:w-[278px] xl:h-[72px] flex flex-row items-center`}>
                <div className={`IMAGE xl:w-[29px] xl:h-[30px]  xl:ml-[20px]`}>
                    <img src={darktheme ? DESIGNWHITE : DESIGNBLACK} alt="" aria-hidden="true"/> 
                </div>
                <div className={`BAR xl:w-[1px] xl:h-[45px] ${darktheme? "bg-white" : "bg-slate-400"} xl:ml-[17px]`}></div>
                <div className={`TEXTBOX xl:w-[183px] xl:h-[41px] flex flex-col  xl:ml-[17px]`}>
                    <h1 className={`title font-manrope xl:text-[16px] font-extrabold`}>Interface & Design</h1>
                    <span className={`SUBTITLE xl:text-[10px] font-extralight font-manrope`}>Briefing, wireframe, UX, UI and branding.</span>
                </div>
            </div>
            <div className={`EXP2BOX xl:w-[278px] xl:h-[72px]  flex flex-row items-center`}>
                <div className={`IMAGE xl:w-[29px] xl:h-[30px]  xl:ml-[20px]`}>
                    <img src={darktheme ? HTMLWHITE : HTMLBLACK} alt="" aria-hidden="true"/> 
                </div>
                <div className={`BAR xl:w-[1px] xl:h-[45px] ${darktheme? "bg-white" : "bg-slate-400"} xl:ml-[17px]`}></div>
                <div className={`TEXTBOX xl:w-[183px] xl:h-[41px] flex flex-col  xl:ml-[17px]`}>
                    <h1 className={`title font-manrope xl:text-[16px] font-extrabold`}>html & css</h1>
                    <span className={`SUBTITLE xl:text-[10px] font-extralight font-manrope`}>Responsive websites with fast loading.</span>
                </div>
            </div>
            <div className={`EXP3BOX xl:w-[278px] xl:h-[72px] flex flex-row items-center`}>
                <div className={`IMAGE xl:w-[29px] xl:h-[30px]  xl:ml-[20px]`}>
                    <img src={darktheme ? REACTWHITE : REACTBLACK} alt="" aria-hidden="true"/> 
                </div>
                <div className={`BAR xl:w-[1px] xl:h-[45px] ${darktheme? "bg-white" : "bg-slate-400"} xl:ml-[17px]`}></div>
                <div className={`TEXTBOX xl:w-[183px] xl:h-[41px] flex flex-col  xl:ml-[17px]`}>
                    <h1 className={`title font-manrope xl:text-[16px] font-extrabold`}>React.js</h1>
                    <span className={`SUBTITLE xl:text-[10px] font-extralight font-manrope`}>Build your system with node.js.</span>
                </div>
            </div>
            <div className={`EXP4BOX xl:w-[278px] xl:h-[72px] flex flex-row items-center`}>
                <div className={`IMAGE xl:w-[29px] xl:h-[30px] xl:ml-[20px]`}>
                    <img src={darktheme ? WORDWHITE : WORDBLACK} alt="" aria-hidden="true"/> 
                </div>
                <div className={`BAR xl:w-[1px] xl:h-[45px] ${darktheme? "bg-white" : "bg-slate-400"} xl:ml-[17px]`}></div>
                <div className={`TEXTBOX xl:w-[183px] xl:h-[41px] flex flex-col  xl:ml-[17px]`}>
                    <h1 className={`title font-manrope xl:text-[16px] font-extrabold`}>WordPress</h1>
                    <span className={`SUBTITLE xl:text-[10px] font-extralight font-manrope`}>Create e-commerce or blog with PHP.</span>
                </div>
            </div>
        </div>
        <div className={`KNWOLEDGE xl:w-[1190px] flex flex-row xl:gap-[46px] xl:h-[264px]  xl:mt-[63px] `}>
            <div className={`BOX1 xl:w-[374px] xl:h-[257px] items-center flex flex-row `}>
                <div className={`line xl:w-[1px] xl:h-[226px] xl:ml-[20px] ${darktheme? "bg-white" : "bg-slate-400"}`}></div>
                <div className={`TEXTBOX xl:w-[296px] xl:h-[214px] flex flex-col xl:ml-[23px] `}>
                    <h1 className={`title xl:text-[16px] font-manrope font-extrabold`}>I've had experience with</h1>
                    <div className={`DESC xl:w-[296px] flex flex-col xl:mt-[10px] xl:h-[188px]`}>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Firebase Database</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>MySQL Database</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>GIT, GitHub, Bitbucket</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Coding PHP</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Figma, Adobe XD, Sketch</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>CSS Preprocessors</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Digital Marketing</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Coding Python (Django)</span>
                    </div>
                </div>
            </div>
            <div className={`BOX2 xl:w-[374px] xl:h-[257px] items-center flex flex-row `}>
            <div className={`line xl:w-[1px] xl:h-[226px] xl:ml-[20px] ${darktheme? "bg-white" : "bg-slate-400"}`}></div>
                <div className={`TEXTBOX xl:w-[296px] xl:h-[214px] flex flex-col xl:ml-[23px] `}>
                    <h1 className={`title xl:text-[16px] font-manrope font-extrabold`}>I have years of experience with</h1>
                    <div className={`DESC xl:w-[296px] flex flex-col xl:mt-[10px] xl:h-[188px] `}>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Coding HTML5</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Coding CSS3</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Coding WordPress</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Coding JavaScript</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Using Elementor</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Using Adobe Package</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Creating Brand and Logo</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Creating User Interface</span>
                    </div>
                </div>
            </div>
            <div className={`BOX3 xl:w-[374px] xl:h-[257px] items-center flex flex-row `}>
            <div className={`line xl:w-[1px] xl:h-[226px] xl:ml-[20px] ${darktheme? "bg-white" : "bg-slate-400"}`}></div>
                <div className={`TEXTBOX xl:w-[296px] xl:h-[214px] flex flex-col xl:ml-[23px] `}>
                    <h1 className={`title xl:text-[16px] font-manrope font-extrabold`}>I work and study about</h1>
                    <div className={`DESC xl:w-[296px] flex flex-col xl:mt-[10px] xl:h-[188px] `}>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Coding React.js</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Coding CSS3</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Coding JavaScript</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Coding TypeScript</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Studying Node.js basics</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Studying API RESTful</span>
                        <span className={`xl:text-[14px] font-manrope font-extralight`}>Studying User Experience</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout
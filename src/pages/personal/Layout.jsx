import { useSelector } from "react-redux"

import INSEP from "../../assets/img/INSEPPORT.png"


const Layout = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`BoxExt ${darkTheme? "text-dark" : "text-light"}
                     xl:w-[1310px] 
                     xl:h-[700px]
                     lg:w-[]
                     lg:h-[] 
                     flex flex-col
                     
                     `}>
            <div className={`Title flex xl:flex-col xl:justify-end`}>
                <h1 className={`text-[29px] flex font-manrope font-extrabold`}>Personal Projects</h1> 
                <div className={`${darkTheme? "bg-white" : "bg-black"} xl:w-[90px] xl:h-[7px] flex xl:ml-[160px] `}></div>
            </div>
            <div className={`${darkTheme? "text-dark" : "text-light"} 
                             xl:w-[1150px] 
                             xl:h-[543px] 
                             ml-[15px] 
                             flex 
                             flex-col 
                             items-center 
                             justify-center`}>
                <div className="flex flex-row gap-4">
                <div className={`img1 ${darkTheme? "text-dark" : "text-light"} 
                                xl:w-[567px] xl:h-[233px]
                                gap-[38.43px]
                                flex flex-row
                                `}>
                      <img className={`xl:w-[233px] xl:h-[233px] `} src={INSEP} alt="" />
                      <div className={`BOXTEXT ${darkTheme? "text-dark" : "text-light"} 
                                     xl:w-[295.57px] xl:h-[193.63px]
                                     flex flex-col
                                     xl:mt-[20px]
                                     `}>
                          <h1 className={`${darkTheme? "text-dark" : "text-light"} xl:text-[20px] font-manrope font-extrabold`}>BeDigital 
                            <span className={`xl:text-[12px] ml-[10px] font-normal font-manrope`}>Social-linking Plataform</span>
                          </h1>
                          <div className={`DESC xl:text-[12px] font-manrope`}>Lorem ipsum dolor sit amet, consectetur adipi.
                                                 Aenean et sem venenatis quam feugiat lla augue sap
                                                 ien, facilisis blandit purus id, facilisis. <br /> <br />

                                                 Lorem ipsum dolor sit amet, consectetur adipi.
                                                 Aenean et sem venenatis quam feugiat lla augue sap
                                                 ien, facilisis blandit purus id, facilisis tinci.
                            </div>
                            <div className={`link xl:w-[130px] font-manrope xl:-text-[14px] font-semibold xl:mt-[17px] `}><a href="#">See the Project</a></div>
                      </div>             
                </div>
                <div className={`img2 ${darkTheme? "text-dark" : "text-light"} 
                                xl:w-[567px] xl:h-[233px]
                                gap-[38.43px]
                                flex flex-row
                                `}>
                      <img className={`xl:w-[233px] xl:h-[233px] `} src={INSEP} alt="" />
                      <div className={`BOXTEXT ${darkTheme? "text-dark" : "text-light"} 
                                     xl:w-[295.57px] xl:h-[193.63px]
                                     flex flex-col
                                     xl:mt-[20px]
                                     `}>
                          <h1 className={`${darkTheme? "text-dark" : "text-light"} xl:text-[20px] font-manrope font-extrabold`}>BeDigital 
                            <span className={`xl:text-[12px] ml-[10px] font-normal font-manrope`}>Social-linking Plataform</span>
                          </h1>
                          <div className={`DESC xl:text-[12px] font-manrope`}>Lorem ipsum dolor sit amet, consectetur adipi.
                                                 Aenean et sem venenatis quam feugiat lla augue sap
                                                 ien, facilisis blandit purus id, facilisis. <br /> <br />

                                                 Lorem ipsum dolor sit amet, consectetur adipi.
                                                 Aenean et sem venenatis quam feugiat lla augue sap
                                                 ien, facilisis blandit purus id, facilisis tinci.
                            </div>
                            <div className={`link xl:w-[130px] font-manrope xl:-text-[14px] font-semibold xl:mt-[17px] `}><a href="#">See the Project</a></div>
                      </div>             
                </div>    
                </div>
                <div className="flex flex-row gap-4 mt-[20px]">
                <div className={`img3 ${darkTheme? "text-dark" : "text-light"} 
                                xl:w-[567px] xl:h-[233px]
                                gap-[38.43px]
                                flex flex-row
                                `}>
                      <img className={`xl:w-[233px] xl:h-[233px] `} src={INSEP} alt="" />
                      <div className={`BOXTEXT ${darkTheme? "text-dark" : "text-light"} 
                                     xl:w-[295.57px] xl:h-[193.63px]
                                     flex flex-col
                                     xl:mt-[20px]
                                     `}>
                          <h1 className={`${darkTheme? "text-dark" : "text-light"} xl:text-[20px] font-manrope font-extrabold`}>BeDigital 
                            <span className={`xl:text-[12px] ml-[10px] font-normal font-manrope`}>Social-linking Plataform</span>
                          </h1>
                          <div className={`DESC xl:text-[12px] font-manrope`}>Lorem ipsum dolor sit amet, consectetur adipi.
                                                 Aenean et sem venenatis quam feugiat lla augue sap
                                                 ien, facilisis blandit purus id, facilisis. <br /> <br />

                                                 Lorem ipsum dolor sit amet, consectetur adipi.
                                                 Aenean et sem venenatis quam feugiat lla augue sap
                                                 ien, facilisis blandit purus id, facilisis tinci.
                            </div>
                            <div className={`link xl:w-[130px] font-manrope xl:-text-[14px] font-semibold xl:mt-[17px] `}><a href="#">See the Project</a></div>
                      </div>             
                </div>
                <div className={`img4 ${darkTheme? "text-dark" : "text-light"} 
                                xl:w-[567px] xl:h-[233px]
                                gap-[38.43px]
                                flex flex-row
                                `}>
                      <img className={`xl:w-[233px] xl:h-[233px] `} src={INSEP} alt="" />
                      <div className={`BOXTEXT ${darkTheme? "text-dark" : "text-light"} 
                                     xl:w-[295.57px] xl:h-[193.63px]
                                     flex flex-col
                                     xl:mt-[20px]
                                     `}>
                          <h1 className={`${darkTheme? "text-dark" : "text-light"} xl:text-[20px] font-manrope font-extrabold`}>BeDigital 
                            <span className={`xl:text-[12px] ml-[10px] font-normal font-manrope`}>Social-linking Plataform</span>
                          </h1>
                          <div className={`DESC xl:text-[12px] font-manrope`}>Lorem ipsum dolor sit amet, consectetur adipi.
                                                 Aenean et sem venenatis quam feugiat lla augue sap
                                                 ien, facilisis blandit purus id, facilisis. <br /> <br />

                                                 Lorem ipsum dolor sit amet, consectetur adipi.
                                                 Aenean et sem venenatis quam feugiat lla augue sap
                                                 ien, facilisis blandit purus id, facilisis tinci.
                            </div>
                            <div className={`link xl:w-[130px] font-manrope xl:-text-[14px] font-semibold xl:mt-[17px] `}><a href="#">See the Project</a></div>
                      </div>             
                </div>    
                </div>
            </div>
    </div>
  )
}

export default Layout
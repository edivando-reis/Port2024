import { useSelector } from "react-redux"


const Layout = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`BoxExt ${darkTheme? "text-dark" : "text-light"}
                     xl:w-[1222px] 
                     xl:h-[700px]
                     lg:w-[]
                     lg:h-[] 
                     flex flex-col
                     border border-red-400`}>
            <div className={`Title flex xl:flex-col xl:justify-end`}>
                <h1 className={`text-[29px] flex font-manrope font-extrabold`}>Personal Projects</h1> 
                <div className={`${darkTheme? "bg-white" : "bg-black"} xl:w-[90px] xl:h-[7px] flex xl:ml-[160px] `}></div>
            </div>
            <div className={`${darkTheme? "text-dark" : "text-light"} 
                             xl:w-[1150px] 
                             xl:h-[543px] 
                             border border-white 
                             ml-[15px] 
                             mt-[40px] 
                             flex 
                             flex-col 
                             items-center 
                             justify-center`}>
                <div className="flex flex-row gap-4">
                <div className={`img1 ${darkTheme? "text-dark" : "text-light"} 
                                xl:w-[567px] xl:h-[233px]
                                border border-blue-400`}>
                                 
                </div>
                <div className={`img2 ${darkTheme? "text-dark" : "text-light"} 
                                xl:w-[567px] xl:h-[233px]
                                border border-blue-400`}>
                                 
                </div>    
                </div>
                <div className="flex flex-row gap-4 mt-[20px]">
                <div className={`img3 ${darkTheme? "text-dark" : "text-light"} 
                                xl:w-[567px] xl:h-[233px]
                                border border-blue-400`}>
                                 
                </div>
                <div className={`img4 ${darkTheme? "text-dark" : "text-light"} 
                                xl:w-[567px] xl:h-[233px]
                                border border-blue-400`}>
                                 
                </div>    
                </div>
            </div>
    </div>
  )
}

export default Layout
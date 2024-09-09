import React from 'react'
import styles from '../styles'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <nav className={`${styles.navbar}`}>
        <div className={`Logo ${darkTheme ? "text-dark" : "text-light"}
                         w-[80px]
                         flex
                         
                         h-[49px]
                         border border-red-700
                         font-manrope
                         text-[36px]
                         font-extrabold 
                      `}>ers.</div>
    </nav>
  )
}

export default Navbar
import { motion } from "framer-motion"
import { useStateContext } from "../../context/ContextProvider"
import useDimensions from "../customHooks/useDimensions"
import NavBar from "./NavBar"
import BrandIcon from "../icons/BrandIcon"
import DarkThemeIcon from "../icons/DarkThemeIcon"
import LightThemeIcon from "../icons/LightThemeIcon"
import { useEffect } from "react"


const Header = ({headerRef, headerScroll}) => {

  const {
    theme, 
    themeStyle, 
    sidebar,
    setSideBar, 
    setTheme} = useStateContext();

  const screenSize = useDimensions();

  const themeIcon = theme === 'Dark' ?
    <LightThemeIcon 
      style={`
        w-7 h-7 
        transition
        duration-100
        hover:ease-in-out
        ${themeStyle.textTertiary}
        ${themeStyle.hover.textColor}
      `}
    /> :
    <DarkThemeIcon 
      style={`
      w-7 h-7 
      transition
      duration-100
      hover:ease-in-out
      ${themeStyle.textTertiary}
      ${themeStyle.hover.textColor}
    `}
    />
  
  const NavItem = screenSize.width > 768 &&
    <NavBar />

    useEffect(() => {
      if (screenSize.width > 768) {
        setSideBar(false);
      }
    }, [NavItem])

  return (
    <motion.header
      ref={ headerRef }
      className={`
        fixed
        top-0
        flex
        justify-between
        items-center
        z-20
        h-[90px]
        w-full
        px-3 
        sm:px-5
        md:px-7
        lg:px-24
        ${
          headerScroll ? 
            "backdrop-blur-md shadow-sm " + themeStyle.shadowColor : 
            ""
        }
      `}
      animate={{
        height: headerScroll ? 60 : 90,
      }}
    >
      <BrandIcon 
        style={{
          width: 55,
          height: 55,
          opacity: 'opacity-80'
        }}
      />
      <div
        className="
          flex
          items-center
        "
      > 
        { !sidebar &&
          <button
            className={`
              p-2
              rounded-full
              ${screenSize.width <= 768 && 'me-12'}
            `}
            onClick={ toggleTheme }
          >
            { 
              themeIcon 
            }
          </button>
        }
        { NavItem }
      </div>
    </motion.header>
  )

  function toggleTheme() {
    if (theme === 'Dark') setTheme('Light');
    if (theme === 'Light') setTheme('Dark');
  }
}

export default Header

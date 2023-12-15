import { useStateContext } from "../../context/ContextProvider"
import useDimensions from "../customHooks/useDimensions"
import NavBar from "./NavBar"
import BrandIcon from "../icons/BrandIcon"
import DarkThemeIcon from "../icons/DarkThemeIcon"
import LightThemeIcon from "../icons/LightThemeIcon"
import { useEffect } from "react"


const Header = () => {

  const {
    theme, 
    themeStyle, 
    sidebar,
    setSideBar, 
    setTheme} = useStateContext();

  const screenSize = useDimensions();

  const themeIcon = theme === 'Dark' ?
    <LightThemeIcon 
      style={`w-7 h-7 ${themeStyle.textColor}`}
    /> :
    <DarkThemeIcon 
      style={`w-7 h-7 ${themeStyle.textColor}`}
    />
  
  const NavItem = screenSize.width > 640 &&
    <NavBar />

    useEffect(() => {
      if (screenSize.width > 640) {
        setSideBar(false);
      }
    }, [NavItem])

  return (
    <header
      className="
       fixed
       top-0
       flex
       justify-between
       items-center
       z-30
       h-16
       w-full
       pt-3
       sm:pt-5
       px-3 
       sm:px-5
       md:px-7
       lg:px-10
      "
    >
      <BrandIcon 
        style={{
          width: 50,
          height: 50,
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
              transition
              duration-200
              hover:ease-in-out
              ${screenSize.width <= 640 && 'me-16'}
              ${themeStyle.hover.bgColor}
              ${themeStyle.hover.bgOpacity}
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
    </header>
  )

  function toggleTheme() {
    if (theme === 'Dark') setTheme('Light');
    if (theme === 'Light') setTheme('Dark');
  }
}

export default Header

import { useStateContext } from "../../context/ContextProvider"
import useDimensions from "../customHooks/useDimensions"
import NavBarLarge from "./NavBarLarge"
import NavBarSmall from "./NavBarSmall"
import BrandIcon from "../icons/BrandIcon"
import DarkThemeIcon from "../icons/DarkThemeIcon"
import LightThemeIcon from "../icons/LightThemeIcon"


const Header = () => {

  const {theme, themeStyle, setTheme} = useStateContext();

  const screenSize = useDimensions();

  const themeIcon = theme === 'Dark' ?
    <LightThemeIcon 
      style={`w-7 h-7 ${themeStyle.textColor}`}
    /> :
    <DarkThemeIcon 
      style={`w-7 h-7 ${themeStyle.textColor}`}
    />
  
  const NavItem = screenSize.width > 640 ?
    <NavBarLarge /> :
    <NavBarSmall />

  return (
    <header
      className="
       flex
       justify-between
       items-center
       z-50
       h-16
       w-full
       px-3
      "
    >
      <BrandIcon />
      <div
        className="
          flex
          items-center
        "
      >
        <button
          className={`
            p-2
            rounded-full
            transition
            duration-200
            hover:ease-in-out
            ${themeStyle.hover.bgColor}
            ${themeStyle.hover.bgOpacity}
          `}
          onClick={ toggleTheme }
        >
          { themeIcon }
        </button>
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

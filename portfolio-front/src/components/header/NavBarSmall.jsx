import { useStateContext } from "../../context/ContextProvider"
import BurgerMenuIcon from "../icons/BurgerMenuIcon"


const NavBarSmall = () => {

  const {themeStyle} = useStateContext();

  return (
    <button
      className={`
        ms-4
        p-2
        rounded-full
        transition
        duration-200
        hover:ease-in-out
        ${themeStyle.hover.bgColor}
        ${themeStyle.hover.bgOpacity}
      `}
    >
      <BurgerMenuIcon 
        style={`
          w-7
          h-7
          ${themeStyle.textColor}
        `}
      />
    </button>
  )
}

export default NavBarSmall
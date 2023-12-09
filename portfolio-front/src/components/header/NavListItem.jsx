import { useStateContext } from "../../context/ContextProvider"


const NavListItem = ({children}) => {

  const {themeStyle} = useStateContext();

  return (
    <li
    className={`
      ms-4
      py-2
      px-4
      rounded-full
      font-semibold
      transition
      duraction-200
      hover:ease-in-out
      hover:cursor-pointer
      ${themeStyle.textColor}
      ${themeStyle.hover.bgColor}
      ${themeStyle.hover.bgOpacity}
    `}
  >
    { children }
  </li>
  )
}

export default NavListItem
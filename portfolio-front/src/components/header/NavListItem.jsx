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
        transition
        duraction-100
        hover:ease-in-out
        hover:cursor-pointer
        ${themeStyle.textTertiary}
        ${themeStyle.hover.textColor}
      `}
  >
    { children }
  </li>
  )
}

export default NavListItem
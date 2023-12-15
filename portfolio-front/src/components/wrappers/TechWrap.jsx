import { useStateContext } from "../../context/ContextProvider"


const TechWrap = ({children}) => {

  const {themeStyle} = useStateContext();

  return (
    <span
      className={`
        py-1
        px-3
        me-[6px]
        my-[4px]
        bg-opacity-10
        font-medium
        text-opacity-80
        text-[12px]
        rounded-full
        ${themeStyle.bgTertiary}
        ${themeStyle.textTertiary}
      `}
    >
      { children }
    </span>
  )
}

export default TechWrap
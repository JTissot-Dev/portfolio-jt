import { useStateContext } from "../../context/ContextProvider"
import useDimensions from "../customHooks/useDimensions"


const SkillsCard = ({icon, title, children}) => {
  
  const {themeStyle} = useStateContext();
  const screenSize = useDimensions();

  return (
    <article
      className={`
        px-2
        ${screenSize.width < 768 ? 'py-4' : 'py-8'}
        bg-opacity-10
        rounded-lg
        w-full
        ${themeStyle.bgSecondary}
      `}
    >
      <div
        className={`
          flex
          items-center
          mx-3
          pb-3
          font-semibold
          text-opacity-60
          border-b
          border-opacity-60
          ${themeStyle.borderSecondary}
          ${themeStyle.textColor}
        `}
      >
        { icon }
        <span
          className="
            ms-5
          "
        >{ title }</span>
      </div>
      <p
        className={`
          px-3
          ${screenSize.width < 768 ? 'pt-3' : 'pt-8'}
          pb-3
          text-opacity-60
          text-sm
          whitespace-pre-line
          ${themeStyle.textTertiary}
        `}
      >
        { children }
      </p>
      
    </article>
  )
}

export default SkillsCard
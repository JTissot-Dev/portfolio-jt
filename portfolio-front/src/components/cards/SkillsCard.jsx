import { useStateContext } from "../../context/ContextProvider"
import useDimensions from "../customHooks/useDimensions"


const SkillsCard = ({icon, title, children, technos}) => {
  
  const {themeStyle} = useStateContext();
  const screenSize = useDimensions();

  return (
    <article
      className={`
        px-2
        my-1
        md:my-0
        ${screenSize.width < 768 ? 'py-4' : 'py-8'}
        bg-opacity-70
        rounded-3xl
        w-full
        border
        border-opacity-20
        ${themeStyle.borderTertiary}
      `}
    >
      <div
        className={`
          flex
          items-center
          mx-3
          pb-3
          font-semibold
          text-opacity-80
          border-b
          border-opacity-20
          ${themeStyle.borderTertiary}
          ${themeStyle.textTertiary}
        `}
      >
        { icon }
        <span
          className="
            ms-5
          "
        >{ title }</span>
      </div>
      <ul
        className="
          flex
          items-center
          mt-3
          mb-2
          mx-3
        "
      >
        {
          technos &&
            technos.map((techno, index) => {
              return (
                <li 
                  key={index}
                  className="
                    mr-3
                  "
                >
                  { techno }
                </li>
              )
            })
        }
      </ul>
      <p
        className={`
          px-3
          pb-3
          text-opacity-70
          text-sm
          whitespace-pre-line
          leading-5
          ${themeStyle.textTertiary}
        `}
      >
        { children }
      </p>
      
    </article>
  )
}

export default SkillsCard
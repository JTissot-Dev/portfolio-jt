import { motion } from "framer-motion"
import { useStateContext } from "../../context/ContextProvider"
import useDimensions from "../customHooks/useDimensions"
import TechWrap from "../wrappers/TechWrap"
import LinkIcon from "../icons/LinkIcon"
import DateIcon from "../icons/DateIcon"

const ProjectCard = ({
  title, 
  children,
  technos,
  date}) => {
  
  const {themeStyle} = useStateContext();
  const screenSize = useDimensions();

  return (
    <motion.button
      className={`
        px-2
        ${screenSize.width < 768 ? 'py-4' : 'py-8'}
        bg-opacity-10
        rounded-lg
        w-full
        hover:cursor-pointer
        ${themeStyle.bgSecondary}
      `}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
    >
      <div
        className={`
          flex
          items-center
          justify-between
          mx-3
          pb-2
          mb-2
          font-semibold
          text-lg
          text-opacity-60
          border-b
          border-opacity-60
          ${themeStyle.borderSecondary}
          ${themeStyle.textColor}
        `}
      >
        <span>{ title }</span>
        <a>
          <LinkIcon style="w-6 h-6 mb-1.5"/>
        </a>
      </div>
      <div
        className="
          px-2.5
          py-2
          flex
          items-center
        "
      >
        <DateIcon 
          style={`
            w-[18px]
            h-[18px]
            text-opacity-60
            ${ themeStyle.textTertiary }
          `}
        />
        <span
          className={`
            w-[18px]
            h-[18px]
            text-[14px]
            text-opacity-60
            ms-3
            ${ themeStyle.textTertiary }
          `}
        >
          { date }
        </span>
      </div>
      <p
        className={`
          mx-3
          pb-6
          text-opacity-60
          text-sm
          text-start
          whitespace-pre-line
          border-b
          border-opacity-60
          ${screenSize.width < 768 ? 'pt-2' : 'pt-8'}
          ${themeStyle.borderSecondary}
          ${themeStyle.textTertiary}
        `}
      >
        { children }
      </p>
      <div
        className="
          pt-4
          mx-3
          flex
          flex-wrap
        "
      >
        {
          technos.map(techno => {
            return (
              <TechWrap>
                { techno }
              </TechWrap>
            )
          } )   
        }
        
      </div>
    </motion.button>
  )
}

export default ProjectCard
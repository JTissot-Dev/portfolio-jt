import { motion } from "framer-motion"
import { useStateContext } from "../../context/ContextProvider"
import useDimensions from "../customHooks/useDimensions";


const ProjectButton = ({title, project, setProject}) => {

  const {themeStyle} = useStateContext();
  const screenSize = useDimensions();
  return (
    <motion.button
      className={`
        px-2
        my-2
        ${screenSize.width < 768 ? 'py-3' : 'py-8'}
        bg-opacity-10
        text-opacity-80
        rounded-md
        w-full
        hover:cursor-pointer
        ${
          project === title ? 
            'border border-opacity-50 ' + themeStyle.borderSecondary :
            ''
        }
        ${
          project === title ? 
            themeStyle.textColor :
            themeStyle.textTertiary
        }
        ${themeStyle.bgSecondary}
      `}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      onClick={ () => setProject(title) }
    >
      { title }
    </motion.button>
  )
}

export default ProjectButton
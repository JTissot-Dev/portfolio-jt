import { motion } from "framer-motion"
import { useStateContext } from "../../context/ContextProvider"


const ContactWrap = ({children, icon, path}) => {

  const {themeStyle} = useStateContext();

  return (
    <motion.a
      className={`
        flex
        items-center
        hover:cursor-pointer
        px-2.5
        py-2
        lg:px-4
        rounded-full
        bg-transparent
        border
        border-opacity-30
        text-sm
        ${themeStyle.textTertiary}
        ${themeStyle.borderTertiary}
      `}
      target="_blank"
      href={ path }
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      { icon }
      <span
        className="
          ms-2
        "
      >
        { children }
      </span>
    </motion.a>
  )
}

export default ContactWrap
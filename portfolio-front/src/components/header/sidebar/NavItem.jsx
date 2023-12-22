import { motion } from "framer-motion"
import { useStateContext } from "../../../context/ContextProvider"


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const NavItem = ({children}) => {

  const {themeStyle} = useStateContext();

  return (
    <motion.li
      className={`
        flex
        items-center
        text-center
        p-4
        hover:cursor-pointer
        ${themeStyle.textTertiary}
        ${themeStyle.hover.textColor}
      `}
      variants={variants}
    >
      { children }
    </motion.li>
  );
};

export default NavItem
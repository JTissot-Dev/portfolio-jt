import * as React from "react"
import { motion } from "framer-motion"
import { Link } from 'react-scroll'
import { useStateContext } from "../../../context/ContextProvider"
import HomeIcon from "../../icons/HomeIcon"

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
        text-center
        text-lg
        font-semibold
        p-4
        hover:cursor-pointer
        ${themeStyle.textSecondary}
        ${themeStyle.hover.textColor}
      `}
      variants={variants}
    >
      <Link
        className="
          flex
          items-center
        "
      >
        { children }
      </Link>
    </motion.li>
  );
};

export default NavItem
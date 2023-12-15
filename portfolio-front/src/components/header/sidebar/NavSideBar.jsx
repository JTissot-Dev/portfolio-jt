import { motion } from "framer-motion"
import NavItem from "./NavItem"
import HomeIcon from "../../icons/HomeIcon"
import ProjectIcon from "../../icons/ProjectIcon"
import InfoIcon from "../../icons/InfoIcon"
import ContactIcon from "../../icons/ContactIcon"


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const NavSideBar = () => {


  return (
    <motion.ul 
      className="
        fixed
        top-[100px]
        right-0
        w-[300px]
        z-20
      "
      variants={variants}
    >
      <NavItem>
          <HomeIcon 
            style="ms-2 w-6 h-6"
          />
          <span className="ms-4">Home</span>
      </NavItem>
      <NavItem>
        <InfoIcon 
              style="ms-2 w-6 h-6"
            />
            <span className="ms-4">About</span>
      </NavItem>
      <NavItem>
        <ProjectIcon 
          style="ms-2 w-6 h-6"
        />
      <span className="ms-4">Projects</span>
      </NavItem>
      <NavItem>
        <ContactIcon 
          style="ms-2 w-6 h-6"
        />
          <span className="ms-4">Contact</span>
      </NavItem>
    </motion.ul>
  )
}


export default NavSideBar
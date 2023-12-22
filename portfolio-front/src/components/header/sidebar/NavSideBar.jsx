import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from 'react-scroll'
import { useStateContext } from "../../../context/ContextProvider"
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

  const {sidebar} = useStateContext();
  const [navOpen, setNavOpen] = useState(false);
  
  useEffect(() => {
    if (sidebar) {
      setNavOpen(true);
    } else {
      setTimeout(() => {
        setNavOpen(false);
      }, 500)
    }
  }, [sidebar])

  return (
    <motion.ul 
      className={`
        fixed
        top-[100px]
        right-0
        w-[250px]
        ${navOpen ? "z-30" : "-z-10" }
      `}
      variants={variants}
    >
      <NavItem>
        <Link
          className="
            flex
            items-center
          "
          activeClass="active" 
          to="Home" 
          spy={true} 
          smooth={true}
          duration={500}
      >
          <HomeIcon 
            style="ms-2 w-6 h-6"
          />
          <span className="ms-4">Accueil</span>
        </Link>
      </NavItem>
      <NavItem>
        <Link
        className="
          flex
          items-center
        "
        activeClass="active" 
        to="Skills" 
        spy={true} 
        smooth={true} 
        offset={-80}
        duration={500}
        >
          <InfoIcon 
              style="ms-2 w-6 h-6"
            />
            <span className="ms-4">Compétences</span>
        </Link>
      </NavItem>

      <NavItem>
        <Link
          className="
            flex
            items-center
          "
          activeClass="active" 
          to="Projects" 
          spy={true} 
          smooth={true} 
          offset={-80}
          duration={500}
        >
          <ProjectIcon 
            style="ms-2 w-6 h-6"
          />
          <span className="ms-4">Projets</span>
        </Link>
      </NavItem>
      <NavItem>
        <Link
          className="
            flex
            items-center
          "
          activeClass="active" 
          to="Contact" 
          spy={true} 
          smooth={true} 
          offset={-80}
          duration={500}
        >
        <ContactIcon 
          style="ms-2 w-6 h-6"
        />
          <span className="ms-4">Contact</span>
        </Link>
      </NavItem>
    </motion.ul>
  )
}


export default NavSideBar
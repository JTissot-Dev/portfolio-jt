import { motion, useCycle } from "framer-motion"
import useDimensions from "../../customHooks/useDimensions"
import NavToggle from "../NavToggle"
import NavSideBar from "./NavSideBar"
import { useStateContext } from "../../../context/ContextProvider"


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(21px at 261px 38px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const SideBar = () => {
  const {themeStyle, setSideBar} = useStateContext();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const screenSize = useDimensions();
  const height = screenSize.height;

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className="
        absolute
        top-0
        bottom-0
        right-0
        w-[300px]
      " 
    >
      <motion.div 
        className={`
          fixed
          top-0
          bottom-0
          right-0
          w-[300px]
          bg-opacity-60
          backdrop-blur-lg
          z-10
          ${themeStyle.bgSecondary}
        `}
        variants={sidebar} 
      />
      <NavSideBar />
      <NavToggle toggleNavBar={ handleSideBard } />
    </motion.nav>
  );

  function handleSideBard() {
    toggleOpen();

      setSideBar(prev => !prev);

  }
}


export default SideBar
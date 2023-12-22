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
    clipPath: "circle(21px at 280px 40px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const SideBar = ({headerScroll}) => {
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
        w-[250px]
      " 
    >
      <motion.div 
        className={`
          fixed
          top-0
          bottom-0
          right-0
          w-[250px]
          bg-opacity-90
          backdrop-blur-lg
          z-30
          ${themeStyle.bgColor}
        `}
        variants={sidebar} 
      />
      <NavSideBar />
      <motion.div
        className="
          flex
          items-center
          h-[100px]
          fixed
          top-0
          right-0
          z-40
        "
        animate={{
          height: headerScroll ? 60 : 100,
        }}
      >
        <NavToggle 
          toggleNavBar={ handleSideBard } 
        />
      </motion.div>
    </motion.nav>
  );

  function handleSideBard() {
    toggleOpen();
    setSideBar(prev => !prev);
  }
}


export default SideBar
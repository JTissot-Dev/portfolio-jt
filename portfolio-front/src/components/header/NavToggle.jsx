import { motion } from "framer-motion"
import { useStateContext } from "../../context/ContextProvider"


const Path = (props) => {

  const {themeStyle} = useStateContext();

  return (
  <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={ themeStyle.svgTertiary }
      strokeLinecap="round"
      {...props}
    />
  )
}

const NavToggle = ({toggleNavBar}) => {

  return (
    <button 
      className={`
        me-5
        sm:me-6
        md:me-7
        mt-1
        z-40
      `}
      onClick={ toggleNavBar }
    >
      <svg width="21" height="21" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  )
}


export default NavToggle
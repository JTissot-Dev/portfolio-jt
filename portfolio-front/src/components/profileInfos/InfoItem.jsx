import { motion } from "framer-motion"
import { useStateContext } from "../../context/ContextProvider"


const InfoItem = ({children, delay}) => {

  const {themeStyle} = useStateContext();

  return (
    <motion.li
      className={`
        flex
        items-center
        text-center
        p-1.5
        text-[11px]
        sm:text-[13px]
        md:text-[14px]
        lg:text-[16px]
        ${themeStyle.textTertiary}
        ${themeStyle.hover.textColor}
      `}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={
        { opacity: 1, scale: 1 } 
      }
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      { children }
    </motion.li>
  );
};

export default InfoItem
import { Element } from "react-scroll"
import { motion } from "framer-motion";
import { useStateContext } from "../context/ContextProvider"
import useDimensions from "../components/customHooks/useDimensions"
import LinkedinIcon from "../components/icons/LinkedinIcon"
import GitHubIcon from "../components/icons/GitHubIcon"
import BrandIcon from "../components/icons/BrandIcon"
import MailIcon from "../components/icons/MailIcon"
import MotionBrandIcon from "../components/icons/MotionBrandIcon"


const Home = () => {

  const {themeStyle, activeLink} = useStateContext();
  const screenSize = useDimensions();

  const iconStyle = {
    width: 35,
    height: 35,
    fill: themeStyle.svgTertiary,
    opacity: 'opacity-90'
  }

  const brandIconSize = () => {
    if (screenSize.width <= 640) {
      return 290;
    } else if (screenSize.width > 640 && screenSize.width < 768 ) {
      return 320;
    } else if (screenSize.width > 768 && screenSize.width < 1024 ) {
      return 360;
    } else if (screenSize.width > 1024 && screenSize.width < 1280 ) {
      return 420;
    } else if (screenSize.width > 1280 && screenSize.width < 1536 ) {
      return 460;
    } else if (screenSize.width >= 1536 ) {
      return 520;
    }
  }

  return (
    <Element
      name="Home"
      className="
        snap-center
        h-screen
        flex
        flex-col-reverse
        items-center
        sm:flex-row
        justify-evenly
        pt-16
        sm:pt-0
      "
    >
      { activeLink === 'Home' &&
      <>
        <div
          className="
            flex
            flex-col
            justify-center
            items-center
            mx-2
          "
        >
            <motion.div
              className="
                flex
                flex-col
                items-center
                mb-14
                sm:my-10
              "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: screenSize.width <= 640 ? 1 : 0.2,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            >
              <h1 
                className= {`
                  text-center
                  text-[23px]
                  sm:text-[20px]
                  md:text-[22px]
                  lg:text-[24px]
                  xl:text-[28px]
                  font-bold
                  text-opacity-70
                  ${themeStyle.textColor}
                `}
              >
                Hey, I'm Jérôme Tissot.
              </h1>
              <h2
                className= {`
                text-center
                text-[33px]
                sm:text-[28px]
                md:text-[33px]
                lg:text-[36px]
                xl:text-[40px]
                text-opacity-80
                ${themeStyle.textTertiary}
              `}
              >
                Full Stack Developer
              </h2>
              <div
              className="
                w-full
                flex
                justify-around
                my-4
              "
              >
                <motion.div
                  className="
                    hover:cursor-pointer
                  "
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    href="https://github.com/JTissot-Dev"
                  >
                    <GitHubIcon  style={ iconStyle }/>
                  </a>
                </motion.div>
                <motion.div
                  className="
                    hover:cursor-pointer
                  "
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a 
                    href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-tissot-616514292/"
                  >
                    <LinkedinIcon style={ iconStyle }/>
                  </a>
                </motion.div>
                <motion.div
                  className="
                    hover:cursor-pointer
                  "
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                <a
                  href="mailto:jerome.tissot@lamache.org"
                >
                  <MailIcon  style={ iconStyle }/>
                </a>
                </motion.div>
              </div>
            </motion.div>
            
          </div>
          <motion.div
            className="
                flex
                flex-col
                justify-center
                items-center
              "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: screenSize.width <= 640 ? 0.2 : 0.4,
              ease: [0, 0.71, 0.2, 1.01]
          }}
          >
            <MotionBrandIcon 
              style={{
                width: brandIconSize(),
                height: brandIconSize(),
                opacity: 'opacity-60'
              }}
            />
          </motion.div>
      </>
      }
    </Element>
  )
}

export default Home
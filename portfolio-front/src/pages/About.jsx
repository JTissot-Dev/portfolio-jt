import { Element } from "react-scroll"
import { motion } from "framer-motion"
import { useStateContext } from "../context/ContextProvider"
import useDimensions from "../components/customHooks/useDimensions"
import ParallaxText from "../components/ParallaxText"
import SkillsCard from "../components/cards/SkillsCard"
import ScreenIcon from "../components/icons/ScreenIcon"
import ServerIcon from "../components/icons/ServerIcon"
import DataIcon from "../components/icons/DataIcon"


const About = () => {

  const {themeStyle, activeLink} = useStateContext();
  const screenSize = useDimensions();

  const skillsStyle = {
    widht: 20,
    height: 20,
    fill: themeStyle.svgColor,
    opacity: 'opacity-60'
  }

  return (
    <Element
      name="Skills"
      className="
        relative
        snap-center
        flex
        flex-col
        justify-center
        md:justify-start
        md:pt-28
        lg:pt-36
        h-screen
        pb-12
      "
    >
      { activeLink === 'Skills' &&
        <div>
          <h1
            className={`
              font-semibold
              text-[25px] 
              text-center 
              mb-2
              md:text-start
              md:ms-5 
              lg:text-[40px] 
              lg:mb-14
              text-opacity-60
              ${themeStyle.textTertiary}
            `}
          >
            My expertise
          </h1>
          <div
            className="
              flex
              flex-col
              md:grid
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
          <motion.div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  md:justify-start
                  mx-5
                  my-2
                "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01]
              }}
              >
                <SkillsCard
                  icon={ 
                    <ScreenIcon 
                      style={ skillsStyle }
                    /> 
                  }
                  title="Frontend"
                >
                  The basics HTML, CSS and JavaScript.<br/>
                  I use <b>React</b> for interactive UI,&#160;
                  <b>Tailwind</b> or <b>Bootstrap</b> for design. 
                  
                </SkillsCard>
            </motion.div>
            <motion.div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  md:justify-start
                  mx-5
                  my-2
                "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0, 0.71, 0.2, 1.01]
              }}
              >
                <SkillsCard
                  icon={ 
                    <ServerIcon 
                      style={ skillsStyle }
                    /> 
                  }
                  title="Backend"
                >
                  I have a particular appreciation for <b>Python</b>, and a good knowledge of <b>Flask</b> Framework.<br/>
                  I've learned most recently to use the <b>PHP</b> framework <b>Laravel</b> that i found very efficient and intuitive.
                </SkillsCard>
            </motion.div>
            <motion.div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  md:justify-start
                  mx-5
                  my-2
                "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0, 0.71, 0.2, 1.01]
              }}
              >
                <SkillsCard
                  icon={ 
                    <DataIcon 
                      style={ skillsStyle }
                    /> 
                  }
                  title="Database"
                >
                  I master primarily <b>PostgreSQL</b>.<br/> 
                  I am also familiar with <b>Oracle</b> and <b>MySQL</b>.
                </SkillsCard>
            </motion.div>
          </div>
          <motion.div
                className="
                  absolute
                  bottom-16
                  w-full
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0, 0.71, 0.2, 1.01]
              }}
              >
            <ParallaxText 
              baseVelocity={-1}
            >
              CettePhraseNeVeutAbsolumentRienDire
            </ParallaxText>
            </motion.div>
        </div>
      }
    </Element>
  )
}

export default About
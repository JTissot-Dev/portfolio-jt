import { useRef } from "react"
import { Element } from "react-scroll"
import { motion, useInView } from "framer-motion"
import { useStateContext } from "../context/ContextProvider"
import useDimensions from "../components/customHooks/useDimensions"
import ParallaxText from "../components/ParallaxText"
import SkillsCard from "../components/cards/SkillsCard"
import ScreenIcon from "../components/icons/ScreenIcon"
import ServerIcon from "../components/icons/ServerIcon"
import DataIcon from "../components/icons/DataIcon"
import JavaScriptIcon from "../components/icons/JavaScriptIcon"
import ReactIcon from "../components/icons/ReactIcon"
import TailwindIcon from "../components/icons/TailwindIcon"
import BootstrapIcon from "../components/icons/BootstrapIcon"
import PythonIcon from "../components/icons/PythonIcon"
import PhpIcon from "../components/icons/PhpIcon"
import PostgresIcon from "../components/icons/PostgresIcon"


const About = () => {

  const {themeStyle, activeLink} = useStateContext();
  const screenSize = useDimensions();

  const refTitle = useRef(null);
  const isInViewTitle = useInView(refTitle, { once: false , margin: "0px 20px -20px 0px"});
  const refFirst = useRef(null);
  const isInViewFirst = useInView(refFirst, { once: false , margin: "0px 20px -20px 0px"});
  const refSecond = useRef(null);
  const isInViewSecond = useInView(refSecond, { once: false , margin: "0px 20px -20px 0px"});
  const refThird = useRef(null);
  const isInViewThird = useInView(refThird, { once: false , margin: "0px 20px -20px 0px"});
  const refBorder = useRef(null);
  const isInViewBorder = useInView(refBorder, { once: false , margin: "0px 20px -20px 0px"});


  const skillsStyle = {
    widht: 20,
    height: 20,
    fill: themeStyle.svgTertiary,
    opacity: 'opacity-90'
  }

  const iconStyle = {
    width: 25,
    height: 25,
    fill: themeStyle.svgTechno,
    opacity: 'opacity-100'
  }

  return (
    <Element
      name="Skills"
      className={`
        relative
        snap-center
        flex
        flex-col
        justify-center
        md:justify-start
        pb-12
      `}
    >
    <div>
      <motion.div
          className={`
            absolute
            w-full
            px-5
            -top-10
            md:-top-20
          `}
          ref={ refBorder }
          initial={{ width: 0 }}
          animate={
            isInViewBorder ? 
            { width: "100%" } :
            { width: 0 }
          }
          transition={{
            duration: 2,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01]
        }}
        >
          <div
            className={`
              border-t
              border-opacity-30
              ${themeStyle.borderTertiary}
            `}
            >
          </div>
      </motion.div>
      <motion.div
            ref={ refTitle }
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInViewTitle ? 
              { opacity: 1, scale: 1 } :
              { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <h3
            className={`
              text-[25px] 
              text-center 
              mb-2
              md:text-[35px] 
              lg:text-[40px] 
              lg:mb-5
              text-opacity-90
              ${themeStyle.textTertiary}
            `}
          >
            Compétences
          </h3>
        </motion.div>
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
            ref={ refFirst }
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
            animate={
              isInViewFirst ? 
              { opacity: 1, scale: 1 } :
              { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.5,
              delay: 0.1,
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
              technos={[
                <JavaScriptIcon style={iconStyle} />,
                <ReactIcon style={iconStyle} />,
                <TailwindIcon style={iconStyle} />,
                <BootstrapIcon style={iconStyle} />
              ]}
            >
              Maitrise des fondamentaux HTML, CSS, JavaScript.<br/>
              J'utilise&#160; 
              <span 
                className={`
                  custom-font-secondary 
                  text-[18px]
                `}
              >React</span> pour l'interface utilisateur,&#160;
              <span 
                className={`
                  custom-font-secondary 
                  text-[18px]
                `}>Tailwind</span> ou <span 
                className={`
                  custom-font-secondary 
                  text-[18px]
                `}>Bootstrap</span> pour le design. 
              
            </SkillsCard>
          </motion.div>
          <motion.div
              ref={ refSecond }
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
              animate={
                isInViewSecond ? 
                { opacity: 1, scale: 1 } : 
                { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 0.5,
                delay: screenSize.width < 768 ? 0.1 : 0.2,
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
                technos={[
                  <PythonIcon style={iconStyle} />,
                  <PhpIcon style={iconStyle} />
                ]}
              >
                J'apprécie particulièrement le langage&#160; 
                <span 
                  className={`
                    custom-font-secondary 
                    text-[18px]
                `}>Python</span>, et j'ai une bonne connaissance du framework&#160; 
                <span 
                  className={`
                    custom-font-secondary 
                    text-[18px]
                `}>Flask</span>.<br/>
                J'ai appris plus récement à utiliser le framework&#160;  
                <span 
                  className={`
                    custom-font-secondary 
                    text-[18px]
                `}>PHP</span>&#160;  
                <span 
                className={`
                  custom-font-secondary 
                  text-[18px]
                  `}>Laravel</span> avec lequel j'ai été rapidement à l'aise.
              </SkillsCard>
          </motion.div>
          <motion.div
              ref={refThird}
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
              animate={isInViewThird ? 
                { opacity: 1, scale: 1 } : 
                { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 0.5,
                delay: screenSize.width < 768 ? 0.1 : 0.3,
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
                technos={[
                  <PostgresIcon style={iconStyle} />
                ]}
              >
                Je maitrise principalement&#160; 
                <span 
                  className={`
                    custom-font-secondary 
                    text-[18px]
                `}>PostgreSQL</span>.<br/> 
                Les SGBD&#160; 
                <span 
                  className={`
                    custom-font-secondary 
                    text-[18px]
                `}>Oracle</span> et&#160; 
                <span 
                  className={`
                    custom-font-secondary 
                    text-[18px]
                `}>MySQL</span> me sont également familiés.
              </SkillsCard>
          </motion.div>
        </div>
        <motion.div
            className="
              relative
              mt-14
              w-full
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
          }}
        >
            <div
              className={`
                mx-5
                absolute
                top-0
                bottom-0
                left-0
                w-[40%]
                z-10
                ${themeStyle.gradientColor}
              `}
            >
            </div>
          <ParallaxText 
            baseVelocity={-0.5}
          />
          <div
              className={`
                mx-5
                absolute
                top-0
                bottom-0
                right-0
                w-[40%]
                z-10
                ${themeStyle.gradientSecondary}
            `}
            >
          </div>
        </motion.div>
      </div>
    </Element>
  )
}

export default About
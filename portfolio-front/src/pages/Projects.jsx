import { useRef } from "react"
import { Element } from "react-scroll"
import { motion, useInView } from "framer-motion"
import { useStateContext } from "../context/ContextProvider"
import useDimensions from "../components/customHooks/useDimensions"
import ProjectCard from "../components/cards/ProjectCard"
import coopImmoGestion from "../projects/coopImmoGestion"
import taskPlanner from "../projects/tasksPlanner"
import ranDay from "../projects/ranDay"
import healthChecker from "../projects/healthChecker"


const Projects = () => {

  const {themeStyle} = useStateContext();
  const screenSize = useDimensions();

  const refTitleProj = useRef(null);
  const isInViewTitleProj = useInView(refTitleProj, { once: false , margin: "0px 10px -10px 0px"});
  const refSix = useRef(null);
  const isInViewSix = useInView(refSix, { once: false , margin: "0px 10px -10px 0px"});
  const refSeven = useRef(null);
  const isInViewSeven = useInView(refSeven, { once: false , margin: "0px 10px -10px 0px"});
  const refHeight = useRef(null);
  const isInViewHeight = useInView(refHeight, { once: false , margin: "0px 10px -10px 0px"});
  const refNine = useRef(null);
  const isInViewNine = useInView(refHeight, { once: false , margin: "0px 10px -10px 0px"});
  


  return (
    <Element
      name="Projects"
      className="
        relative
        mx-5
        md:mx-0
        snap-center
        sm:pt-0
      "
    >
      <motion.div
          ref={ refTitleProj }
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInViewTitleProj ? 
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
            mb-5
            md:text-[35px] 
            lg:text-[40px] 
            lg:mb-8
            text-opacity-90
            ${themeStyle.textTertiary}
          `}
        >
          Mes Projets
        </h3>
      </motion.div>
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-2
          md:gap-8
          w-full
        " 
      > 
        <motion.div
          ref={ refSix }
            className="
                flex
                flex-col
                justify-start
                items-center
                w-full
              "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInViewSix ? 
                { opacity: 1, scale: 1 } :
                { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
            }}
          >
          <ProjectCard
            title={ healthChecker.title }
            technos={ healthChecker.technos }
            date={ healthChecker.date }
            url="https://github.com/WildCodeSchool/2024-02-wns-jaune-healthcheck"
          >
            { healthChecker.description }
          </ProjectCard>
        </motion.div>
        <motion.div
          ref={ refSeven }
            className="
                flex
                flex-col
                justify-start
                items-center
                w-full
              "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInViewSeven ? 
                { opacity: 1, scale: 1 } :
                { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 0.5,
                delay: screenSize.width < 768 ? 0.1 : 0.25,
                ease: [0, 0.71, 0.2, 1.01]
            }}
          >
          <ProjectCard
            title={ ranDay.title }
            technos={ ranDay.technos }
            date={ ranDay.date }
            url="https://github.com/JTissot-Dev/ran-day"
          >
            { ranDay.description }
          </ProjectCard>
        </motion.div>
        <motion.div
          ref={ refHeight }
          className="
              flex
              flex-col
              justify-start
              items-center
              w-full
            "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInViewHeight ? 
              { opacity: 1, scale: 1 } :
              { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.5,
              delay: screenSize.width < 768 ? 0.1 : 0.40,
              ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <ProjectCard
            title={ taskPlanner.title }
            technos={ taskPlanner.technos }
            date={ taskPlanner.date }
            url="https://github.com/JTissot-Dev/task-planner"
          >
            { taskPlanner.description }
          </ProjectCard>
        </motion.div>
        <motion.div
          ref={ refNine }
          className="
              flex
              flex-col
              justify-start
              items-center
              w-full
            "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInViewNine ? 
              { opacity: 1, scale: 1 } :
              { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.5,
              delay: screenSize.width < 768 ? 0.1 : 0.50,
              ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <ProjectCard
            title={ coopImmoGestion.title }
            technos={ coopImmoGestion.technos }
            date={ coopImmoGestion.date }
            url="https://github.com/JTissot-Dev/CoopImmoGestion"
          >
            { coopImmoGestion.description }
          </ProjectCard>
        </motion.div>
      </div>
    </Element>
  )
}

export default Projects
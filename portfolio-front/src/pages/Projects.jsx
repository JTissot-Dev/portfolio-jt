import { useRef } from "react"
import { Element } from "react-scroll"
import { motion, useInView } from "framer-motion"
import { useStateContext } from "../context/ContextProvider"
import useDimensions from "../components/customHooks/useDimensions"
import ProjectCard from "../components/cards/ProjectCard"
import coopImmoGestion from "../projects/coopImmoGestion"
import taskPlanner from "../projects/tasksPlanner"


const Projects = () => {

  const {themeStyle} = useStateContext();
  const screenSize = useDimensions();

  const refTitleProj = useRef(null);
  const isInViewTitleProj = useInView(refTitleProj, { once: false , margin: "0px 10px -10px 0px"});
  const refSix = useRef(null);
  const isInViewSix = useInView(refSix, { once: false , margin: "0px 10px -10px 0px"});
  const refSeven = useRef(null);
  const isInViewSeven = useInView(refSeven, { once: false , margin: "0px 10px -10px 0px"});


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
          flex
          flex-col
          justify-center
          items-center
          md:grid
          md:grid-cols-2
          md:place-items-start
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
                mx-5
                md:mx-0
                md:px-5
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
            title={ taskPlanner.title }
            technos={ taskPlanner.technos }
            date={ taskPlanner.date }
            url="https://tasks-planner.fly.dev"
          >
            { taskPlanner.description }
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
              mx-5
              md:mx-0
              md:px-5
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
            title={ coopImmoGestion.title }
            technos={ coopImmoGestion.technos }
            date={ coopImmoGestion.date }
            url="https://coopimmogestion.fly.dev"
          >
            { coopImmoGestion.description }
          </ProjectCard>
        </motion.div>
      </div>
    </Element>
  )
}

export default Projects
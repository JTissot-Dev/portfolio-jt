import { useState } from "react"
import { Element } from "react-scroll"
import { motion } from "framer-motion";
import { useStateContext } from "../context/ContextProvider"
import useDimensions from "../components/customHooks/useDimensions"
import ProjectCard from "../components/cards/ProjectCard"
import ProjectButton from "../components/buttons/ProjectButton"
import taskPlanner from "../projects/TaskPlanner"
import coopImmoGestion from "../projects/CoopImmoGestion"


const Projects = () => {

  const {themeStyle, activeLink} = useStateContext();
  const screenSize = useDimensions();
  const [project, setProject] = useState('Task Planner');
  const projects = [
    taskPlanner,
    coopImmoGestion
  ]


  return (
    <Element
      name="Projects"
      className="
        relative
        mx-5
        snap-center
        h-screen
        flex
        flex-col-reverse
        items-center
        sm:flex-row
        justify-around
        pt-16
        sm:pt-0
      "
    >
      <h1
        className={`
          absolute
          top-20
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
          My projects
        </h1>
      { activeLink === 'Projects' &&
      <>
        <div
          className="
            flex
            flex-col
            justify-center
            items-center
            w-full
            mx-2
          "
        >
          <motion.div
            className="
              flex
              flex-col
              items-center
              sm:mb-14
              sm:my-10
              w-full
            "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: screenSize.width <= 640 ? 0.4 : 0.2,
              ease: [0, 0.71, 0.2, 1.01]
          }}
          >
            {
              projects.map(proj => {
                return(
                  <ProjectButton
                    title={ proj.title }
                    project={ project }
                    setProject={ setProject }
                  /> 
                )
              })
            }
          </motion.div>
          </div>
          <motion.div
          className="
              h-[300px]
              flex
              flex-col
              justify-start
              md:justify-center
              items-center
              w-full
              mx-5
            "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: screenSize.width <= 640 ? 0.1 : 0.3,
              ease: [0, 0.71, 0.2, 1.01]
          }}
          >
            {
              projects.filter(proj => proj.title === project)
                      .map( selectProj => {
                        return (
                          <ProjectCard
                            title={ selectProj.title }
                            technos={ selectProj.technos }
                            date={ selectProj.date }
                          >
                            { selectProj.description }
                          </ProjectCard>
                        )
                     })
            }
          </motion.div>
      </>
      }
    </Element>
  )
}

export default Projects
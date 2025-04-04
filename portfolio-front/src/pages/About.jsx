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
import TypeScriptIcon from "../components/icons/TypeScriptIcon"
import MySqlIcon from "../components/icons/MySqlIcon"
import NodeJsIcon from "../components/icons/NodeJsIcon"
import RestIcon from "../components/icons/RestIcon"
import GraphQLIcon from "../components/icons/GraphQLIcon"
import ApiIcon from "../components/icons/ApiIcon"
import FormatTechnologyText from "../components/wrappers/FormatTechnologyText"
import DevopsIcon from "../components/icons/DevopsIcon"
import DockerIcon from "../components/icons/DockerIcon"
import TraefikIcon from "../components/icons/TraefikIcon"
import CaddyIcon from "../components/icons/CaddyIcon"
import NginxIcon from "../components/icons/NginxIcon"
import GitWorkflowIcon from "../components/icons/GitWorkflowIcon"


const About = () => {

  const {themeStyle, activeLink} = useStateContext();
  const screenSize = useDimensions();

  const refTitle = useRef(null);
  const isInViewTitle = useInView(refTitle, { once: false , margin: "0px 20px -20px 0px"});
  const refFrontend = useRef(null);
  const isInViewFrontend = useInView(refFrontend, { once: false , margin: "0px 10px -10px 0px"});
  const refBackend = useRef(null);
  const isInViewBackend = useInView(refBackend, { once: false , margin: "0px 10px -10px 0px"});
  const refDatabase = useRef(null);
  const isInViewDatabase = useInView(refDatabase, { once: false , margin: "0px 10px -10px 0px"});
  const refAPI = useRef(null);
  const isInViewAPI = useInView(refAPI, { once: false , margin: "0px 10px -10px 0px"});
  const refDevOps = useRef(null);
  const isInViewDevOps = useInView(refDevOps, { once: false , margin: "0px 10px -10px 0px"});

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
        md:pt-0
        pb-12
        px-5
        md:px-0
      `}
    >
    <div>
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
            grid-cols-1
            gap-8
            space-y-5
            md:space-y-0
            md:grid
            md:grid-cols-2
            lg:grid-cols-3
            
          "
        >
        <motion.div
            ref={ refFrontend }
            className="
              flex
              flex-col
              items-center
              justify-center
              md:justify-start
            "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInViewFrontend ? 
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
                <TypeScriptIcon style={iconStyle} />,
                <ReactIcon style={iconStyle} />,
                <TailwindIcon style={iconStyle} />,
                <BootstrapIcon style={iconStyle} />
              ]}
            >
              Maîtrise des fondamentaux 
              <FormatTechnologyText> HTML</FormatTechnologyText>, 
              <FormatTechnologyText> CSS</FormatTechnologyText>,
              <FormatTechnologyText> JavaScript</FormatTechnologyText>.
              J'utilise&#160; 
              <FormatTechnologyText>React </FormatTechnologyText>
              pour l'interface utilisateur,&#160;
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
              ref={ refBackend }
              className="
                flex
                flex-col
                items-center
                justify-center
                md:justify-start
              "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInViewBackend ? 
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
                  <NodeJsIcon style={iconStyle} />,
                  <PhpIcon style={iconStyle} />,
                ]}
              >
                J'apprécie particulièrement le langage&#160; 
                <FormatTechnologyText>Python </FormatTechnologyText>
                et maitrise les frameworks&#160; 
                <FormatTechnologyText>FastAPI</FormatTechnologyText>
                <span> et </span>
                <FormatTechnologyText>Flask</FormatTechnologyText>.<br/>
                J'ai également une bonne maîtrise de 
                <FormatTechnologyText> Node.js </FormatTechnologyText> 
                avec le framework&#160;  
                <FormatTechnologyText>Express</FormatTechnologyText>
                <span> et la librairie </span>
                <FormatTechnologyText>Apollo Server</FormatTechnologyText>
                <span> ainsi que du framework </span>
                <FormatTechnologyText>PHP Laravel</FormatTechnologyText>.
              </SkillsCard>
          </motion.div>
          <motion.div
              ref={refDatabase}
              className="
                flex
                flex-col
                items-center
                justify-center
                md:justify-start
              "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInViewDatabase ? 
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
                  <PostgresIcon style={iconStyle} />,
                  <MySqlIcon style={iconStyle} />
                ]}
              >
                Je maîtrise principalement
                <FormatTechnologyText> PostgreSQL </FormatTechnologyText>
                et&#160;
                <FormatTechnologyText>MySQL</FormatTechnologyText>.
                Le SGBD&#160; 
                <FormatTechnologyText>Oracle </FormatTechnologyText>
                m'est également familié.
              </SkillsCard>
          </motion.div>
          <motion.div
              ref={refAPI}
              className="
                flex
                flex-col
                items-center
                justify-center
                md:justify-start
              "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInViewAPI ? 
                { opacity: 1, scale: 1 } : 
                { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 0.5,
                delay: screenSize.width < 768 ? 0.1 : 0.4,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            >
              <SkillsCard
                icon={ 
                  <ApiIcon 
                    style={ skillsStyle }
                  /> 
                }
                title="API"
                technos={[
                  <RestIcon style={iconStyle} />,
                  <GraphQLIcon style={iconStyle} />
                ]}
              >
                Je maîtrise à la fois le modèle&#160; 
                <FormatTechnologyText>REST</FormatTechnologyText>
                <span>
                , une référence pour l'architecture des applications web modernes, et le langage de requête&#160; 
                </span>
                <FormatTechnologyText>GraphQL</FormatTechnologyText>
                <span>
                , offrant une flexibilité et une efficacité accrues dans la gestion des données. Ces compétences me permettent de concevoir des API performantes, robustes et parfaitement adaptées aux besoins spécifiques des utilisateurs.
                </span>
              </SkillsCard>
          </motion.div>
          <motion.div
              ref={refDevOps}
              className="
                flex
                flex-col
                items-center
                justify-center
                md:justify-start
              "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInViewDevOps ? 
                { opacity: 1, scale: 1 } : 
                { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 0.5,
                delay: screenSize.width < 768 ? 0.1 : 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            >
              <SkillsCard
                icon={ 
                  <DevopsIcon 
                    style={ skillsStyle }
                  /> 
                }
                title="DevOps"
                technos={[
                  <DockerIcon style={iconStyle} />,
                  <TraefikIcon style={iconStyle} />,
                  <CaddyIcon style={iconStyle} />,
                  <NginxIcon style={iconStyle} />,
                  <GitWorkflowIcon style={iconStyle} />,
                ]}
              >
                <span>Je suis à l'aise avec l'utilisation d'outils DevOps tels que</span> 
                <FormatTechnologyText> Docker </FormatTechnologyText> 
                <span>pour la containerisation des applications, ainsi que </span>
                <FormatTechnologyText>Traefik</FormatTechnologyText>,
                <FormatTechnologyText> Caddy</FormatTechnologyText> et 
                <FormatTechnologyText> Nginx </FormatTechnologyText>
                <span>pour la mise en place d'infrastructures réseau. J'ai également travaillé avec </span> 
                <FormatTechnologyText>GitHub Workflows </FormatTechnologyText>
                pour la mise en place de pipeline CI/CD.
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
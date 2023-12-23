import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import useDimensions from "./customHooks/useDimensions"
import { useStateContext } from "../context/ContextProvider"
import ContactWrap from "./wrappers/ContactWrap"
import GitHubIcon from "./icons/GitHubIcon"
import LinkedinIcon from "./icons/LinkedinIcon"
import MailIcon from "./icons/MailIcon"


const Footer = () => {

  const screenSize = useDimensions();
  const {themeStyle} = useStateContext();

  const iconStyle = {
    width: screenSize.width < 1024 ? 18 : 20,
    height: screenSize.width < 1024 ? 18 : 20,
    fill: themeStyle.svgTertiary,
    opacity: 'opacity-100'
  };

  return (
    <footer
      className="
        py-8
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <div
        className="
          w-full
          flex
          justify-center
          mt-16
        "
      >
        <div
          className="mx-1"
        >
          <ContactWrap
            icon={
              <GitHubIcon  
                style={ iconStyle }
              />
            }
            path="https://github.com/JTissot-Dev"
          >
            GitHub
          </ContactWrap>
        </div>
        <div
          className="mx-1"
        >
          <ContactWrap
            icon={
              <LinkedinIcon  
                style={ iconStyle }
              />
            }
            path="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-tissot-616514292/"
          >
            Linkedin
          </ContactWrap>
        </div>
        <div
          className="mx-1"
        >
          <ContactWrap
            icon={
              <MailIcon 
                style={ iconStyle }
              />
            }
            path="mailto:jerome.tissot.dev@gmail.com"
          >
            Mailto
          </ContactWrap>
        </div>
      </div>
      <div
        className={`
          mt-7
          ${themeStyle.textTertiary}
          text-lg
          text-opacity-90
        `}
      >
        <p>©Copyright 2023 - Jérôme Tissot</p>
      </div>
    </footer>
  )
}

export default Footer
import { useStateContext } from "../context/ContextProvider"
import GitHubIcon from "./icons/GitHubIcon"
import LinkedinIcon from "./icons/LinkedinIcon"
import MailIcon from "./icons/MailIcon"


const Footer = () => {

  const {themeStyle} = useStateContext();

  const iconStyle = {
    width: 30,
    height: 30,
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
        <a
          className="mx-4"
          href="https://github.com/JTissot-Dev"
        >
            <GitHubIcon 
              style={ iconStyle }
            />
        </a>
        <a
          className="mx-4"
          href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-tissot-616514292/"
        >
            <LinkedinIcon  
              style={ iconStyle }
            />
        </a>
        <a
          className="mx-4"
          href="mailto:jerome.tissot.dev@gmail.com"
        >
            <MailIcon   
              style={ iconStyle }
            />
        </a>
      </div>
      <div
        className={`
          mt-8
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
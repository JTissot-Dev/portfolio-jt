import { useRef } from "react"
import { motion, useScroll, scroll, progress } from "framer-motion"
import { useStateContext } from "./context/ContextProvider"
import Header from "./components/header/Header"
import SideBar from "./components/header/sidebar/SideBar"
import useDimensions from "./components/customHooks/useDimensions"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"


function App() {

  
  const {theme, themeStyle, setActiveLink} = useStateContext();
  const screenSize = useDimensions();
  const { scrollYProgress } = useScroll();
  const body = document.getElementById('root');
  
  if (theme === 'Dark') {
    body.className = 'background-dark';
  } else {
    body.className = 'background-light';
  }

  scroll((progress) => {
    switch(progress) {
      case 0:
        return setActiveLink('Home');
      case 0.5:
        return setActiveLink('Skills');
      case 1:
        return setActiveLink('Projects');
    }
  })

  return (
    <div
      className={`
        ${theme === 'Light' ? 'bg-grid-light' : 'bg-grid-dark'}
        min-w-screen
        min-h-screen
        z-10
      `}
    >
      <Header />
      <motion.div
        className={`
          fixed
          bottom-10
          right-0
          left-0
          mx-10
          h-2
          rounded-full
          bg-opacity-50
          ${themeStyle.bgSecondary}
        `}
          
        style={{ scaleX: scrollYProgress }}
      />
      {
        screenSize.width < 640 &&
          <SideBar />
      }
      <div
        className="
          snap-y
          container
          mx-auto
          px-0
          sm:px-5
          md:px-10
          lg:px-16
          xl:px-20
        "
      >
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  )
}

export default App

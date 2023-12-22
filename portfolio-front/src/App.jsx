import { useState, useRef, useEffect } from "react"
import { motion, useScroll, scroll, } from "framer-motion"
import { useStateContext } from "./context/ContextProvider"
import Header from "./components/header/Header"
import SideBar from "./components/header/sidebar/SideBar"
import useDimensions from "./components/customHooks/useDimensions"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"


function App() {

  
  const {theme, themeStyle, sidebar} = useStateContext();
  const [headerScroll, setHeaderScroll] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(null);
  const screenSize = useDimensions();
  const { scrollYProgress } = useScroll();
  const body = document.getElementById('root');
  const headerRef = useRef();
  
  if (theme === 'Dark') {
    body.className = 'background-dark';
  } else {
    body.className = 'background-light';
  }
  console.log(headerHeight)
  scroll((progress) => {
    if (progress > 0) {
      setHeaderScroll(true);
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.clientHeight);
      }
      
    } else {
      setHeaderScroll(false);
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.clientHeight);

      }
    }

  })

  return (
    <div
      className={`
        min-w-screen
        min-h-screen
        md:pb-10
      `}
    >
      {
        sidebar &&
          <div 
            className="
              fixed
              top-0
              bottom-0
              right-0
              left-0
              backdrop-blur
              z-30
            "
          >
        </div>
      }
      <Header 
        headerRef={ headerRef } 
        headerScroll={ headerScroll }
      />
      { headerHeight === 60 &&
          <motion.div
            className={`
              fixed
              top-[60px]
              left-0
              right-0
              h-[1px]
              rounded-full
              bg-opacity-50
              z-20
              ${themeStyle.bgTertiary}
            `}
            
          style={{ scaleX: scrollYProgress }}
        />
      }

      {
        screenSize.width < 768 &&
          <SideBar headerScroll={ headerScroll }/>
      }
      <div
        className="
          snap-y
          container
          md:w-11/12
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
        <Contact />
      </div>
    </div>
  )
}

export default App

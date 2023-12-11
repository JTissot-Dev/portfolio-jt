import { useStateContext } from "./context/ContextProvider"
import Header from "./components/header/Header"
import SideBar from "./components/header/sidebar/SideBar";
import useDimensions from "./components/customHooks/useDimensions";


function App() {

  const {themeStyle} = useStateContext();
  const screenSize = useDimensions();

  return (
    <div
      className={`
        min-w-screen
        min-h-screen
        ${themeStyle.bgColor}
      `}
    >
      <Header />
      {
        screenSize.width < 640 &&
          <SideBar />
      }
      <div
        className="
          container
          mx-auto
        "
      >
      </div>
    </div>
  )
}

export default App

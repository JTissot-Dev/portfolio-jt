import { useStateContext } from "./context/ContextProvider";
import Header from "./components/header/Header";


function App() {

  const {themeStyle} = useStateContext();

  return (
    <div
      className={`
        min-w-screen
        min-h-screen
        ${themeStyle.bgColor}
      `}
    >
      <Header />
    </div>
  )
}

export default App

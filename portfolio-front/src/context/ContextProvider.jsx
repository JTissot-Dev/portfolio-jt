import { createContext, useContext, useState } from "react";

const stateContext = createContext({
  theme: null,
  themeStyle: {},
  setTheme: () => {}
})

export const ContextProvider = ({children}) => {

  const [theme, setTheme] = useState('Dark');

  const themeStyle = {
    bgColor: theme === 'Dark' ? 'bg-slate-900' : 'bg-stone-50',
    textColor: theme === 'Dark' ? 'text-yellow-600' : 'text-emerald-700',
    hover: {
      bgColor: theme === 'Dark' ? 'hover:bg-slate-800' : 'hover:bg-stone-200',
      bgOpacity: theme === 'Dark' ? 'hover:bg-opacity-90' : 'hover:bg-opacity-80'
    }
  }

  return (
    <stateContext.Provider value={{
      theme,
      themeStyle,
      setTheme
    }}>
      { children }
    </stateContext.Provider>
  )
}

export const useStateContext = () => useContext(stateContext);
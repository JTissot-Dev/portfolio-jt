import { createContext, useContext, useState } from "react";

const stateContext = createContext({
  theme: null,
  sidebar: false,
  themeStyle: {},
  setTheme: () => {},
  setSideBar: () => {}
})

export const ContextProvider = ({ children }) => {

  const [theme, setTheme] = useState('Dark');
  const [sidebar, setSideBar] = useState(false);

  const themeStyle = {
    bgColor: theme === 'Dark' ? 'bg-slate-900' : 'bg-stone-50',
    bgSecondary: theme === 'Dark' ? 'bg-yellow-600' : 'bg-emerald-700',
    textColor: theme === 'Dark' ? 'text-yellow-600' : 'text-emerald-700',
    textSecondary: theme === 'Dark' ? 'text-slate-900' : 'text-stone-50',
    textTertiary: theme === 'Dark' ? 'text-stone-50' : 'text-slate-900',
    svgColor: theme === 'Dark' ? '#ca8a04' : '#047857',
    svgSecondary: theme === 'Dark' ? '#0f172a' : '#fafaf9',
    hover: {
      bgColor: theme === 'Dark' ? 'hover:bg-slate-800' : 'hover:bg-stone-200',
      bgOpacity: theme === 'Dark' ? 'hover:bg-opacity-90' : 'hover:bg-opacity-80',
      textColor: theme === 'Dark' ? 'hover:text-yellow-600' : 'hover:text-emerald-700',
    }
  }

  return (
    <stateContext.Provider value={{
      theme,
      sidebar,
      themeStyle,
      setTheme,
      setSideBar
    }}>
      { children }
    </stateContext.Provider>
  )
}

export const useStateContext = () => useContext(stateContext);
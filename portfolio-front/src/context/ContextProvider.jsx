import { createContext, useContext, useState } from "react";

const stateContext = createContext({
  theme: null,
  sidebar: false,
  themeStyle: {},
  activeLink: '',
  setTheme: () => {},
  setSideBar: () => {},
  setActiveLink: () => {}
})

export const ContextProvider = ({ children }) => {

  const [theme, setTheme] = useState('Dark');
  const [sidebar, setSideBar] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const themeStyle = {
    bgColor: theme === 'Dark' ? 'bg-slate-900' : 'bg-stone-50',
    bgSecondary: theme === 'Dark' ? 'bg-yellow-600' : 'bg-emerald-700',
    bgTertiary: theme === 'Dark' ? 'bg-stone-50' : 'bg-slate-900',
    borderSecondary: theme === 'Dark' ? 'border-yellow-600' : 'border-emerald-700',
    textColor: theme === 'Dark' ? 'text-yellow-600' : 'text-emerald-700',
    textSecondary: theme === 'Dark' ? 'text-slate-900' : 'text-stone-50',
    textTertiary: theme === 'Dark' ? 'text-stone-50' : 'text-slate-900',
    borderTertiary: theme === 'Dark' ? 'border-stone-50' : 'border-slate-900',
    svgColor: theme === 'Dark' ? '#ca8a04' : '#047857',
    svgSecondary: theme === 'Dark' ? '#0f172a' : '#fafaf9',
    svgTertiary: theme === 'Dark' ? '#fafaf9' : '#0f172a',
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
      activeLink,
      setTheme,
      setSideBar,
      setActiveLink
    }}>
      { children }
    </stateContext.Provider>
  )
}

export const useStateContext = () => useContext(stateContext);
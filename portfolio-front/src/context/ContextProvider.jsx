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
    bgColor: theme === 'Dark' ? 'bg-[#111111]' : 'bg-[#FFFFFF]',
    bgSecondary: theme === 'Dark' ? 'bg-blue-700' : 'bg-cyan-700',
    bgTertiary: theme === 'Dark' ? 'bg-stone-50' : 'bg-gray-400',
    bgCard: theme === 'Dark' ? 'bg-slate-900' : 'bg-zinc-50',
    bgForm: theme === 'Dark' ? 'bg-[#171717]' : 'bg-[#FFFFFF]',
    shadowColor: theme === 'Dark' ? 'shadow-slate-800' : 'shadow-stone-200',
    borderSecondary: theme === 'Dark' ? 'border-blue-700' : 'border-cyan-700',
    textColor: theme === 'Dark' ? 'text-blue-700' : 'text-cyan-700',
    textPrimary: theme === 'Dark' ? 'text-slate-950' : 'text-stone-50',
    textSecondary: theme === 'Dark' ? 'text-slate-950' : 'text-stone-50',
    textTertiary: theme === 'Dark' ? 'text-stone-50' : 'text-slate-500',
    textTechno: theme === 'Dark' ? '#1d4ed8' : '#1d4ed8',
    borderTertiary: theme === 'Dark' ? 'border-stone-50' : 'border-slate-600',
    svgColor: theme === 'Dark' ? '#1d4ed8' : '#0e7490',
    svgPrimary: theme === 'Dark' ? '#020617' : '#fafaf9',
    svgSecondary: theme === 'Dark' ? '#1d4ed8' : '#0e7490',
    svgTertiary: theme === 'Dark' ? '#fafaf9' : '#475569',
    svgTechno: theme === 'Dark' ? '#1d4ed8' : '#0e7490',
    hover: {
      bgColor: theme === 'Dark' ? 'hover:bg-slate-800' : 'hover:bg-stone-200',
      bgOpacity: theme === 'Dark' ? 'hover:bg-opacity-90' : 'hover:bg-opacity-80',
      textColor: theme === 'Dark' ? 'hover:text-blue-700' : 'hover:text-cyan-700',
      borderColor: theme === 'Dark' ? 'hover:border-stone-50' : 'hover:border-slate-600',
    },
    focus: {
      borderColor: theme === 'Dark' ? 'focus:ring-blue-700' : 'focus:ring-cyan-600',
      textColor: theme === 'Dark' ? 'peer-focus:text-blue-700' : 'peer-focus:text-cyan-600 ',
    },
    gradientColor: theme === 'Dark' ? 
      'bg-gradient-to-r from-[#111111] to-[#00000000]' : 
      'bg-gradient-to-r from-[#FFFFFF] to-[#ffffff00]',
    gradientSecondary: theme === 'Dark' ? 
    'bg-gradient-to-r from-[#00000000] to-[#111111]' : 
    'bg-gradient-to-r from-[#ffffff00] to-[#FFFFFF]'
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
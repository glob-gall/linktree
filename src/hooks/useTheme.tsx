import { createContext, useContext, useState } from "react";
import { ThemeProvider as ThemeProviderSC } from 'styled-components'

export type ThemeType = {
  primary: string,
  primaryShaded: string,
  secondary: string,
  background: string,
  background2:string,
}
const themes:ThemeType[] = [
  {
    primary: '#303030',
    primaryShaded: '#404040',
    secondary: '#fafafa',
    background:'#f8ffd9',
    background2: '#f4f74e',
  },
  {
    primary: '#fafafa',
    primaryShaded: '#ddd',
    secondary: '#303030',
    background: '#2f2e52',
    background2:'#0a0a16',
  },
]

type IThemeProvider = {
  theme:ThemeType
  switchTheme():void
}

export const ThemeContext = createContext<IThemeProvider>({
  theme:themes[0],
  switchTheme:()=>{},
})

export default function useTheme():IThemeProvider{
  return useContext(ThemeContext)
}

export type ThemeProviderProps = {
  children: React.ReactNode
}
export function ThemeProvider({children}:ThemeProviderProps){
  const [theme,setTheme] = useState<ThemeType>(themes[0])

  function switchTheme(){
    if (theme === themes[0]) setTheme(themes[1])
    else setTheme(themes[0]);
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      switchTheme,
    }}>
      <ThemeProviderSC theme={theme}>
        {children}
      </ThemeProviderSC>
    </ThemeContext.Provider>
  )
}